import { EdgeGatewayDhcpIpPoolJson } from './__json__/edge-gateway-dhcp-ip-pool-json';
import { EdgeGatewayDhcpOptions } from './edge-gateway-dhcp-options';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayDhcpIpPool {

  constructor(private _json: EdgeGatewayDhcpIpPoolJson) {
  }

  /**
   * Get auto configure dns.
   * @returns {boolean}
   */
  get autoConfigureDNS(): boolean {
    return this._json.auto_configure_dns;
  }

  /**
   * Get default gateway.
   * @returns {string}
   */
  get defaultGateway(): string {
    return this._json.default_gateway;
  }

  /**
   * Get domain name.
   * @returns {string}
   */
  get domainName(): string {
    return this._json.domain_name;
  }

  /**
   * Get primary name server.
   * @returns {string}
   */
  get primaryNameServer(): string {
    return this._json.primary_name_server;
  }

  /**
   * Get secondary name server.
   * @returns {string}
   */
  get secondaryNameServer(): string {
    return this._json.secondary_name_server;
  }

  /**
   * Get pool id.
   * @returns {string}
   */
  get poolId(): string {
    return this._json.pool_id;
  }

  /**
   * Get ip range.
   * @returns {string}
   */
  get ipRange(): string {
    return this._json.ip_range;
  }

  /**
   * Get subnet mask.
   * @returns {string}
   */
  get subnetMask(): string {
    return this._json.subnet_mask;
  }

  /**
   * Get lease time.
   * @returns {string}
   */
  get leaseTime(): string {
    return this._json.lease_time;
  }

  /**
   * Get allow huge range.
   * @returns {boolean}
   */
  get allowHugeRange(): boolean {
    return this._json.allow_huge_range;
  }

  /**
   * Get next server.
   * @returns {string}
   */
  get nextServer(): string {
    return this._json.next_server;
  }

  /**
   * Get dhcp options.
   * @returns {EdgeGatewayDhcpOptions}
   */
  get dhcpOptions(): EdgeGatewayDhcpOptions {
    return new EdgeGatewayDhcpOptions(this._json.dhcp_options);
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayDhcpIpPoolJson}
   */
  get json(): EdgeGatewayDhcpIpPoolJson {
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