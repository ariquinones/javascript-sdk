import { ReportTypeJson } from '../../../common/__json__/report-type-json';
import { ReportFormat } from '../../../common/__json__/report-format';

export interface ReportWithSummaryJson {
  uuid: string;
  entity_uuid: string;
  report_type: ReportTypeJson;
  file_type: ReportFormat;
  created: number;
  summary: string;
  has_summary: boolean;
}
