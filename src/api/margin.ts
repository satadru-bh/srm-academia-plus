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
 * Calculates the exact attendance margin relative to SRM's strict 75% minimum requirement.
 * All labels are rendered in comfy lowercase.
 */
export function calculateAttendanceMargin(hoursConducted: number, hoursPresent: number): AttendanceMargin {
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

  if (attendancePercent >= 75) {
    const margin = Math.floor((hoursPresent - 0.75 * hoursConducted) / 0.75);
    const status = attendancePercent >= 80 ? 'safe' : 'borderline';
    const safeMargin = Math.max(0, margin);

    let label = 'on 75% edge';
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
    const required = Math.ceil((0.75 * hoursConducted - hoursPresent) / 0.25);
    const safeRequired = Math.max(1, required);

    return {
      status: 'danger',
      margin: 0,
      required: safeRequired,
      attendancePercent,
      label: `attend next ${safeRequired} ${safeRequired === 1 ? 'class' : 'classes'} to hit 75%`
    };
  }
}

/**
 * Simulates future attendance impact when student attends (+delta) or skips (-delta) upcoming classes.
 */
export function simulateAttendance(
  hoursConducted: number,
  hoursPresent: number,
  delta: number
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
  const marginInfo = calculateAttendanceMargin(simConducted, simPresent);

  return {
    simulatedConducted: simConducted,
    simulatedPresent: simPresent,
    simulatedPercent,
    marginInfo
  };
}
