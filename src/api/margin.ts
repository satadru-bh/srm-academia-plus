export interface AttendanceMargin {
  status: 'safe' | 'borderline' | 'danger';
  margin: number;       // classes student can afford to miss while staying >= 75%
  required: number;     // consecutive classes student must attend to reach 75%
  attendancePercent: number;
  label: string;        // all-lowercase human-readable badge text
}

export interface SimulationResult {
  simulatedConducted: number;
  simulatedPresent: number;
  simulatedPercent: number;
  marginInfo: AttendanceMargin;
}

/**
 * Calculates the exact attendance margin relative to a target percentage (defaults to SRM's 75% minimum).
 * All labels are rendered in comfy lowercase.
 */
export function calculateAttendanceMargin(
  hoursConducted: number,
  hoursPresent: number,
  targetPercent: number = 75
): AttendanceMargin {
  const target = Math.max(1, Math.min(99, targetPercent));
  const t = target / 100;

  if (hoursConducted <= 0) {
    return {
      status: 'safe',
      margin: 0,
      required: 0,
      attendancePercent: 100,
      label: 'no classes conducted'
    };
  }

  const rawPercent = (hoursPresent / hoursConducted) * 100;
  const attendancePercent = Math.round(rawPercent * 100) / 100;

  if (attendancePercent >= target) {
    const margin = Math.floor((hoursPresent - t * hoursConducted) / t + 1e-9);
    const status = attendancePercent >= target + 5 ? 'safe' : 'borderline';
    const safeMargin = Math.max(0, margin);

    let label = `on ${target}% edge`;
    if (safeMargin > 0) {
      label = `can skip ${safeMargin} ${safeMargin === 1 ? 'class' : 'classes'}`;
    }

    return {
      status,
      margin: safeMargin,
      required: 0,
      attendancePercent,
      label
    };
  } else {
    const required = Math.ceil((t * hoursConducted - hoursPresent) / (1 - t) - 1e-9);
    const safeRequired = Math.max(1, required);

    return {
      status: 'danger',
      margin: 0,
      required: safeRequired,
      attendancePercent,
      label: `attend next ${safeRequired} ${safeRequired === 1 ? 'class' : 'classes'} to hit ${target}%`
    };
  }
}

/**
 * Simulates future attendance impact when student attends (+delta) or skips (-delta) upcoming classes.
 */
export function simulateAttendance(
  hoursConducted: number,
  hoursPresent: number,
  delta: number,
  targetPercent: number = 75
): SimulationResult {
  let simConducted = hoursConducted;
  let simPresent = hoursPresent;

  if (delta > 0) {
    simConducted += delta;
    simPresent += delta;
  } else if (delta < 0) {
    simConducted += Math.abs(delta);
  }

  const rawPercent = simConducted > 0 ? (simPresent / simConducted) * 100 : 100;
  const simulatedPercent = Math.round(rawPercent * 100) / 100;
  const marginInfo = calculateAttendanceMargin(simConducted, simPresent, targetPercent);

  return {
    simulatedConducted: simConducted,
    simulatedPresent: simPresent,
    simulatedPercent,
    marginInfo
  };
}
