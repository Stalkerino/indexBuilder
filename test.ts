export interface RecruitConfig {
  url: string
  signinUrl: string
  token?: string
  searchRecordsToken?: string
  email: string
  password: string
}
export interface GetSearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[]
  searchCondition: GetSearchCondition
  version: number
  newFormat?: number
}
export interface SearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[]
  criteria: SearchCriteria
  newFormat?: number
}
export interface GetSearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[]
  searchCondition: GetSearchCondition
  version: number
  newFormat?: number
}
export interface SearchCriteria {
  field: string
  search: string
}
export interface GetSearchCondition extends SearchCriteria {
  operator: SearchOperator
}
export interface BaseGetRecruitRecordsParams {
  selectColumns?: string[]
  fromIndex?: number
  toIndex?: number
  sortColumnString?: string
  sortOrderString?: SortOrder
  lastModifiedTime?: Date
  newFormat?: number
  version?: number
}
export interface GetRecruitRecordsParams extends BaseGetRecruitRecordsParams {
  module: RecruitModuleName
}
export interface BaseAddRecordsParams {
  version: number
  wfTrigger?: boolean
  duplicateCheck?: number
  isApproval?: boolean
  newFormat?: number
}
export interface AddRecordsParams extends BaseAddRecordsParams {
  module: RecruitModuleName
  data: Xmler[]
}
export interface GetFieldsParams {
  module: string
  version: number
  type?: number // 1: summary fields, 2: mandatory fields
}
export interface UpdateRecordParams {
  module: RecruitModuleName
  data: Xmler
  id: string
  version?: number
}
export interface RecruitConfig {
  titi: string
  signinUrl: string
  token?: string
  searchRecordsToken?: string
  email: string
  password: string
}
export interface GetSearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[]
  searchCondition: GetSearchCondition
  version: number
  newFormat?: number
}
export interface SearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[]
  criteria: SearchCriteria
  newFormat?: number
}
export interface GetSearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[]
  searchCondition: GetSearchCondition
  version: number
  newFormat?: number
}
export interface SearchCriteria {
  field: string
  search: string
}
export interface GetSearchCondition extends SearchCriteria {
  operator: SearchOperator
}
export interface BaseGetRecruitRecordsParams {
  selectColumns?: string[]
  fromIndex?: number
  toIndex?: number
  sortColumnString?: string
  sortOrderString?: SortOrder
  lastModifiedTime?: Date
  newFormat?: number
  version?: number
}
export interface GetRecruitRecordsParams extends BaseGetRecruitRecordsParams {
  module: RecruitModuleName
}
export interface BaseAddRecordsParams {
  version: number
  wfTrigger?: boolean
  duplicateCheck?: number
  isApproval?: boolean
  newFormat?: number
}
export interface AddRecordsParams extends BaseAddRecordsParams {
  module: RecruitModuleName
  data: Xmler[]
}
export interface GetFieldsParams {
  module: string
  version: number
  type?: number // 1: summary fields, 2: mandatory fields
}
export interface UpdateRecordParams {
  module: RecruitModuleName
  data: Xmler
  id: string
  version?: number
}
export interface RecruitConfig {
  titi: string
  signinUrl: string
  token?: string
  searchRecordsToken?: string
  email: string
  password: string
}
export interface GetSearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[]
  searchCondition: GetSearchCondition
  version: number
  newFormat?: number
}
export interface SearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[]
  criteria: SearchCriteria
  newFormat?: number
}
export interface GetSearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[]
  searchCondition: GetSearchCondition
  version: number
  newFormat?: number
}
export interface SearchCriteria {
  field: string
  search: string
}
export interface GetSearchCondition extends SearchCriteria {
  operator: SearchOperator
}
export interface BaseGetRecruitRecordsParams {
  selectColumns?: string[]
  fromIndex?: number
  toIndex?: number
  sortColumnString?: string
  sortOrderString?: SortOrder
  lastModifiedTime?: Date
  newFormat?: number
  version?: number
}
export interface GetRecruitRecordsParams extends BaseGetRecruitRecordsParams {
  module: RecruitModuleName
}
export interface BaseAddRecordsParams {
  version: number
  wfTrigger?: boolean
  duplicateCheck?: number
  isApproval?: boolean
  newFormat?: number
}
export interface AddRecordsParams extends BaseAddRecordsParams {
  module: RecruitModuleName
  data: Xmler[]
}
export interface GetFieldsParams {
  module: string
  version: number
  type?: number // 1: summary fields, 2: mandatory fields
}
export interface UpdateRecordParams {
  module: RecruitModuleName
  data: Xmler
  id: string
  version?: number
}
