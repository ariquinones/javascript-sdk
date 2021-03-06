import { BandwidthUsageSummaryJson } from './__json__/bandwidth-usage-summary-json';

/**
 * Bandwidth Usage Summary.
 */
/* istanbul ignore next: autogenerated */
export class BandwidthUsageSummary {

  constructor(private _json: BandwidthUsageSummaryJson) {
  }

  /**
   * Get reserved amount.
   * @returns {number}
   */
  get reservedAmount(): number | undefined {
    return this._json.reserved_amount;
  }

  /**
   * Get total usage.
   * @returns {number}
   */
  get totalUsage(): number {
    return this._json.total_usage;
  }

  /**
   * Get burst usage.
   * @returns {number}
   */
  get burstUsage(): number {
    return this._json.burst_usage;
  }

  /**
   * Get month.
   * @returns {number}
   */
  get month(): number {
    return this._json.month;
  }

  /**
   * Get year.
   * @returns {number}
   */
  get year(): number {
    return this._json.year;
  }

  /**
   * Get the json representation of this class.
   * @returns {BandwidthUsageSummaryJson}
   */
  get json(): BandwidthUsageSummaryJson {
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
