import { NATRestorePointJson } from './__json__/nat-restore-point-json';

/**
 * NAT Restore Point.
 */
/* istanbul ignore next: autogenerated */
export class NATRestorePoint {

  constructor(private _json: NATRestorePointJson) {
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get restore point time.
   * @returns {number}
   */
  get restorePointTime(): Date {
    return new Date(this._json.restore_point_time);
  }

  /**
   * Get the json representation of this class.
   * @returns {NATRestorePointJson}
   */
  get json(): NATRestorePointJson {
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