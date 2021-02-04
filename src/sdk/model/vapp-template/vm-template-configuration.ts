import { TemplateDiskConfiguration } from './template-disk-configuration';
import { TemplateVnicConfiguration } from './template-vnic-configuration';
import { VmTemplateConfigurationJson } from './__json__/vm-template-configuration-json';
import { EulaSection } from './eula-section';

/**
 * VM Template Configuration Response.
 */
/* istanbul ignore next: autogenerated */
export class VmTemplateConfiguration {

  constructor(private _json: VmTemplateConfigurationJson) {
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get memory in bytes.
   * @returns {number}
   */
  get memoryInBytes(): number {
    return this._json.memory_in_bytes;
  }

  /**
   * Get number of cpus.
   * @returns {number}
   */
  get numberOfCpus(): number {
    return this._json.number_of_cpus;
  }

  /**
   * Get number of cores per socket.
   * @returns {number}
   */
  get numberOfCoresPerSocket(): number {
    return this._json.number_of_cores_per_socket;
  }

  /**
   * Get storage profile uuid.
   * @returns {string}
   */
  get storageProfileUuid(): string {
    return this._json.storage_profile_uuid;
  }

  /**
   * Get hardware version.
   * @returns {string}
   */
  get hardwareVersion(): string {
    return this._json.hardware_version;
  }

  /**
   * Get operating system version.
   * @returns {string}
   */
  get operatingSystemVersion(): string {
    return this._json.operating_system_version;
  }

  /**
   * Get expose cpu virtualization.
   * @returns {boolean}
   */
  get exposeCpuVirtualization(): boolean {
    return this._json.expose_cpu_virtualization;
  }

  /**
   * Get computer name.
   * @returns {string}
   */
  get computerName(): string {
    return this._json.computer_name;
  }

  /**
   * Get disks.
   * @returns {Array<TemplateDiskConfiguration>}
   */
  get disks(): Array<TemplateDiskConfiguration> {
    return this._json.disks.map((tplDiskConfig) => new TemplateDiskConfiguration(tplDiskConfig));
  }

  /**
   * Get vnics.
   * @returns {Array<TemplateVnicConfiguration>}
   */
  get vnics(): Array<TemplateVnicConfiguration> {
    return this._json.vnics.map((tplVnicConfig) => new TemplateVnicConfiguration(tplVnicConfig));
  }

  /**
   * Get eula sections if any exist
   * @return {Array<EulaSection>}
   */
  get eulaSections(): Array<EulaSection> {
    return this._json.eula_sections.map((it) => new EulaSection(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {VmTemplateConfigurationJson}
   */
  get json(): VmTemplateConfigurationJson {
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
