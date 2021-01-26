export type IReportCategory = 'STABILITY' | '';
export type IReportType = 'ERROR' | 'HTTP-ERROR';
export type IReportErrorType =
  | 'CONSOLE-ERROR'
  | 'JS-EXEC-ERROR'
  | 'SCRIPT-ERROR'
  | 'RESOURCE-LOADING-ERROR'
  | 'UNHANDLEDREJECTION';

export interface IReportInfoBase {
  /** 页面标题 */
  title: string;
  /** 页面地址 */
  url: string;
  /** 访问时间戳 */
  timestamp: number;
  /** 用户浏览信息 */
  userAgent: string;
  /** 影响类型  stability 稳定性 */
  category: IReportCategory;
  /** 记录类型 */
  type: IReportType;
  /** 错误类型 */
  errorType: IReportErrorType;
  /** 错误类型详情 */
  message: string;
  /** 访问文件名 */
  filename: string;
  /** 代码行列信息 */
  position: [number, number];
  /** 堆栈信息 */
  stack: string;
  /** 节点选择器 */
  selector: string;
  /** 节点 Xpath */
  xpath: string;
  /** IP 地址 */
  ip: string;
  /** 平台 */
  platform: string;
}

export interface IJSExecErrorReport extends IReportInfoBase {
  /** 影响类型 （大类） stability 稳定性 */
  category: 'STABILITY';
  /** 记录类型（小类） */
  type: 'ERROR';
  /** 错误类型 */
  errorType: 'JS-EXEC-ERROR';
}

export interface IResourceLoadingErrorReport extends IReportInfoBase {
  /** 影响类型 （大类） stability 稳定性 */
  category: 'STABILITY';
  /** 记录类型（小类） */
  type: 'ERROR';
  /** 错误类型 */
  errorType: 'RESOURCE-LOADING-ERROR';
}

export interface IUnhandledrejectionReport extends IReportInfoBase {
  /** 影响类型 （大类） stability 稳定性 */
  category: 'STABILITY';
  /** 记录类型（小类） */
  type: 'ERROR';
  /** 错误类型 */
  errorType: 'UNHANDLEDREJECTION';
}
