import { BGPFilter } from './bgp-filter';
import { BGPNeighbourJson } from './__json__/bgp-neighbour-json';

/**
 * BGP Neighbor
 */
/* istanbul ignore next: autogenerated */
export class BGPNeighbour {

  constructor(private _json: BGPNeighbourJson) {
  }

  /**
   * Get ip address.
   * @returns {string}
   */
  get ipAddress(): string {
    return this._json.ip_address;
  }

  /**
   * Get remote as.
   * @returns {number | undefined}
   */
  get remoteAs(): number | undefined {
    return this._json.remote_as || undefined;
  }

  /**
   * Get remote as number.
   * @returns {string}
   */
  get remoteAsNumber(): string {
    return this._json.remote_as_number;
  }

  /**
   * Get weight.
   * @returns {number}
   */
  get weight(): number {
    return this._json.weight;
  }

  /**
   * Get hold down timer.
   * @returns {number}
   */
  get holdDownTimer(): number {
    return this._json.hold_down_timer;
  }

  /**
   * Get keep alive timer.
   * @returns {number}
   */
  get keepAliveTimer(): number {
    return this._json.keep_alive_timer;
  }

  /**
   * Get password.
   * @returns {string | undefined}
   */
  get password(): string | undefined {
    return this._json.password || undefined;
  }

  /**
   * Get remove private as.
   * @returns {boolean}
   */
  get removePrivateAs(): boolean {
    return this._json.remove_private_as;
  }

  /**
   * Get bgp filters.
   * @returns {Array<BGPFilter>}
   */
  get bgpFilters(): Array<BGPFilter> {
    return this._json.bgp_filters.map(it => new BGPFilter(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {BGPNeighbourJson}
   */
  get json(): BGPNeighbourJson {
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
