import { MonthlyScheduleJson } from './__json__/monthly-schedule-json';
import { Day } from './__json__/day';
import { DayCount } from './__json__/day-count';

/**
 * Monthly Schedule.
 */
/* istanbul ignore next: autogenerated */
export class MonthlySchedule {

  constructor(private _json: MonthlyScheduleJson) {
  }

  /**
   * Get day.
   * @returns {Day}
   */
  get day(): Day {
    return this._json.day;
  }

  /**
   * Get day count.
   * @returns {DayCount}
   */
  get dayCount(): DayCount {
    return this._json.day_count;
  }

  /**
   * Get the json representation of this class.
   * @returns {MonthlyScheduleJson}
   */
  get json(): MonthlyScheduleJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}