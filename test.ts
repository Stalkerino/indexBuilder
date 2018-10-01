import { EventEmitter } from 'events';

export interface HeadersLimitations {
  Limit: any
  Remaining: any
  Reset: any
}
export interface Requester {
  Request(req: Request): Promise<Response>
}
export declare class Client extends EventEmitter {
//TODO: Add the var from the other class 
  public rates: HeadersLimitations;
  constructor(requester: Requester, url: string);
}
export declare type Encoder = (data: any) => Promise<string>;
export declare type Decoder = (data: string) => Promise<any>;
export declare type ContentType = string;
export declare type Headers = { [name: string]: string };
export interface RawMessage {
  headers?: Headers
  body?: any
  uuid?: string
}
export declare abstract class Message {
  constructor(raw: RawMessage);
  public SetHeader(name: string, value: string): void;
  public GetHeader(name: string): string | string[];
}
export interface RawRequest extends RawMessage {
  url?: string
  hostname?: string
  port?: string
  method?: string
  path?: string
  parameters?: any
  body?: any
  encoder?: Encoder
  responseDecoder?: Decoder
}
export declare class Request extends Message {
//TODO: Add the var from the other class 
  constructor(raw: RawRequest);
}
export interface RawResponse extends RawMessage {
  status: number
}
export declare class Response extends Message {
//TODO: Add the var from the other class 
  constructor(raw: RawResponse);
  public toString(): string;
  public toLightString(): string;
}
export declare class NodeRequester implements Requester {
  constructor();
  public Request(req: Request): Promise<Response>;
}
export interface SigninParams {
  client_id: string
  client_secret: string
  code: string
  redirect_uri: string
  grant_type: string
}
export interface Account extends Record {
  Account_Name?: string
  Account_Type?: string // None, Partenaire, Client, Concurrent, Autre, Prospect.
  Compte_cl?: string // None, Classe A, Classe B
  Client_Provigis?: string
  Effectif_Tranche?: string
  Site?: string
  NAF?: string
  D_signation_NAF?: string
  Phone?: string
  SIRET_reg_num?: string
  Fax?: string
  N_TVA_intracom?: string
  CA_M?: number
  Tag?: string
  SIREN1?: string
  SIREN?: number
  Billing_Street?: string
  Compl_ment_d_adresse?: string
  Billing_Code?: string
  Billing_City?: string
  Pays_du_Client?: string
  Description?: string
  R_f_renc?: string
  Adh_rent_au_Club?: string
  Charg_de_compte_Provigis?: string
  Date_abonnement?: Date
  Informations_SFDC?: string
}
export interface CrmContact extends Record {
  First_Name?: string
  Salutation?: string
  Last_Name?: string
  Lead_Source?: string
  Full_Name?: string
  Type_de_contact?: string
  Marque?: string
  Title?: string
  Profil_LinkedIn?: string
  Account_Name?: string
  Email_Opt_Out?: boolean
  Email?: string
  Source1?: string
  Secondary_Email?: string
  Phone?: string
  Tag?: string
  Mobile?: string
  Data_Processing_Basis?: string
  Data_Source?: string
  Mailing_Street?: string
  Mailing_Zip?: string
  Mailing_City?: string
  Mailing_Country?: string
  Description?: string
  Last_Visited_Time?: Date
  First_Visited_Time?: string
  Referrer?: string
  First_Visited_URL?: string
  Number_Of_Chats?: number
  Average_Time_Spent_Minutes?: number
  Days_Visited?: number
  Visitor_Score?: number
  GCLID?: string
  ZCAMPAIGNID?: string
  ADGROUPID?: string
  ADID?: string
  KEYWORDID?: string
  Keyword?: string
  Click_Type?: string
  Device_Type?: string
  Ad_Network?: string
  Search_Partner_Network?: string
  Ad_Campaign_Name?: string
  AdGroup_Name?: string
  Ad?: string
  GADCONFIGID?: string
  Ad_Click_Date?: string
  Conversion_Exported_On?: Date
  Conversion_Export_Status?: string
  Reason_for_Conversion_Failure?: string
  Departement?: string
  Assistant?: string
  Contact_Cl?: string
  Email_assistant_e?: string
  Signataire?: string
  Asst_Phone?: string
  Statut_consultant?: string
  Disponibilit?: string
  Matricule_ADM?: string
  Conseiller_RH?: number
  Acc_s_EC?: string
  R_gion?: string
  Historique_Type_de_contact?: string
  Structure_Juridique?: string
  Frais_de_gestion?: string
  Recommand_par?: string
  Nom_soci_t_portage?: string
  ID_Zoho?: string
  SIRET_du_consultant?: string
  Date_of_Birth?: string
  Nationalit?: string
  Situation_familiale?: string
  Pays_de_naissance?: string
  Nb_enfants?: number
  Nom_de_naissance?: string
  N_SS?: number
  Ville_de_naissance?: string
  Nom_Banque?: string
  BIC?: string
  Domiciliation?: string
  IBAN?: string
}
export declare enum UserType {
  AllUsers = 'AllUsers',
  ActiveUsers = 'ActiveUsers',
  DeactiveUsers = 'DeactiveUsers',
  ConfirmedUsers = 'ConfirmedUsers',
  NotConfirmedUsers = 'NotConfirmedUsers',
  DeletedUsers = 'DeletedUsers',
  ActiveConfirmedUsers = 'ActiveConfirmedUsers',
  AdminUsers = 'AdminUsers',
  ActiveConfirmedAdmins = 'ActiveConfirmedAdmins',
  CurrentUser = 'CurrentUser'
}
export interface ReadAllUsersParams {
  scope: string
  type: UserType
}
export interface ReadOneUserParams {
  scope: string
  userId: string
  type: UserType
}
export interface RefreshParams {
  client_id: string
  client_secret: string
  refresh_token: string
  grant_type: string
}
export declare enum CrmModuleName {
  Leads = 'Leads',
  Accounts = 'Accounts',
  Contacts = 'Contacts',
  Deals = 'Deals',
  Campaigns = 'Campaigns',
  Tasks = 'Tasks',
  Cases = 'Cases',
  Events = 'Events',
  Calls = 'Calls',
  Solutions = 'Solutions',
  Products = 'Products',
  Vendors = 'Vendors',
  Pricebooks = 'Pricebooks',
  Quotes = 'Quotes',
  Salesorders = 'Salesorders',
  Purchaseorders = 'Purchaseorders',
  Invoices = 'Invoices',
  Custom = 'Custom',
  Notes = 'Notes',
  Approvals = 'Approvals',
  Dashboards = 'Dashboards',
  Search = 'Search',
  Activities = 'Activities'
}
export declare enum CrmMetaData {
  Modules = 'modules',
  Fields = 'fields',
  Layouts = 'layouts',
  RelatedLists = 'related_lists',
  CustomViews = 'custom_views'
}
export interface GetRecordParams {
  module: CrmModuleName
  id: string
}
export interface GetRecordsParams {
  module: CrmModuleName
  fields?: string[]
  sort_order?: string
  sort_by?: string
  converted?: string
  approved?: string
  page?: number
  per_page?: number
  cvid?: number
}
export interface InsertRecordsParams {
  module: CrmModuleName
  data?: any[]
}
export interface CrmConfig {
  url: string
  token?: string
  refreshToken?: string
  clientId: string
  clientSecret: string
  code: string
  redirectUri: string
}
export declare class CRM extends Client {
//TODO: Add the var from the other class 
  public token: string;
  public refreshToken: string;
  constructor(requester: http.Requester, config: CrmConfig);
}
export interface Lead extends Record {
  Last_Name?: string
  Email?: string
  Description?: string
  Rating?: string
  Website?: string
  Twitter?: string
  Salutation?: string // enuml civility Mr. Miss. Mrs ?
  First_Name?: string
  Lead_Status?: string
  Industry?: string
  Skype_ID?: string
  Phone?: string
  Street?: string
  Zip_Code?: string
  Email_Opt_Out?: boolean
  Designation?: string
  City?: string
  No_of_Employees?: string
  Mobile?: string
  State?: string
  Lead_Source?: string
  Country?: string
  Fax?: string
  Annual_Revenue?: number
  Secondary_Email?: string
  Company?: string
  Type_de_contact?: string
  Marque?: string
  Tag?: string
  Site_source?: string
}
export interface Record {
  Owner?: {
    id: string
  }
  Modified_By?: string
  Created_By?: string
}
export declare class Candidate extends RecruitRecord {
//TODO: Add the var from the other class 
  public lastname: string;
  public firstname?: string;
  public salutation?: Salutation;
  public email?: string;
  public secondEmail?: string;
  public emailOptOut?: string;
  public cvTitle?: string;
  public availableAt?: Date;
  public phone?: string;
  public mobile?: string;
  public website?: string;
  public minTJM?: number;
  public expectedSalary?: number;
  public currentSalary?: number;
  public salarialPorterage?: boolean;
  public address: Address;
  public yearsOfExperience?: number;
  public highestQualifaicationHeld?: Qualification;
  public currentJob?: string;
  public currentEmployer?: string;
  public skills?: string;
  public additionalInfo?: string;
  public skypeId?: string;
  public twitter?: string;
  public status?: CandidateStatus;
  public source?: CandidateSource;
  public resume?: string;
  public formatedResume?: string;
  public coverLetter?: string;
  public others?: string;
  constructor(raw: any  );
}
export declare enum Qualification {
  None = '-None-',
  MCA = 'M.C.A.',
  BE = 'B.E.',
  BSC = 'B.SC.',
  MS = 'M.S.',
  BTech = 'B.Tech'
}
export declare enum CandidateStatus {
  WaitingForEvaluation = 'En attente d’évaluation',
  Qualified = 'Qualifié',
  NotQualified = 'Non qualifié',
  Undesirable = 'Candidat indésirable',
  Contacted = 'Contacté',
  ToContactInFutur = 'A contacter dans le futur',
  NotContacted = 'Non contacté',
  TriedToContact = 'Tentative de contact',
  Associated = 'Associé',
  SubmittedToClient = 'Soumis au client',
  ApprovedByClient = 'Approuvé par le client',
  RejectedByClient = 'Rejeté par le client',
  InterviewToPlan = 'Entretien à planifier',
  InterviewPlanned = 'Entretien planifié',
  RejectedAtInterview = 'Rejeté pour l’entretien',
  InterviewInProgress = 'Entretien en cours',
  Waiting = 'En attente',
  Hired = 'Embauché',
  Rejected = 'Rejeté',
  RejectedHirabled = 'Rejeté-Embauchable',
  ToOffer = 'À offrir',
  OfferAccepted = 'Offre acceptée',
  OfferDone = 'Offre faite',
  OfferRefused = 'Offre refusée',
  OfferRemoved = 'Offre retirée',
  Rejoined = 'A rejoint',
  NotPresented = 'Non-présentation',
  ConvertedEmployee = 'Converti - Employé'
}
export declare enum CandidateSource {
  Ad = 'Publicité',
  API = 'API',
  IncomingCall = 'Appel entrant',
  Incorporated = 'Incorporer',
  EmployeeReference = 'Référence d’employé',
  ExternalReference = 'Référence externe',
  Facebook = 'Facebook',
  Gapps = 'Gapps',
  ImportedFromGoogle = 'Importation Google',
  Imported = 'Importer',
  ImportedByAnalyser = 'Importé par l’analyseur',
  Internal = 'Interne',
  Partner = 'Partenaire',
  IncomingCv = 'Boîte de réception des CV',
  SearchEngine = 'Moteur de recherche',
  Twitter = 'Twitter',
  ImportedFromZohoCrm = 'Importé depuis Zoho CRM',
  IndeedCv = 'Indeed CV'
}
export declare class ClientCompany extends RecruitRecord {
//TODO: Add the var from the other class 
  public clientName: string;
  public accountManager?: string;
  public contactNumber?: string;
  public parentClient?: string;
  public billingAddress?: Address;
  public shippingAddress?: Address;
  public source?: ClientSource;
  public hasAttachment?: boolean;
  public industry?: Industry;
  public fax?: string;
  public about?: string;
  public website?: string;
  constructor(raw: any  );
}
export declare enum Industry {
  None = '-None-',
  Communications = 'Communications',
  Technology = 'Technologie',
  Administration = 'Administration',
  Industry = 'Industrie',
  FinancialsServices = 'Services Financiers',
  ComputerScience = 'Informatique',
  Education = 'Education',
  Pharmacy = 'Pharmacie',
  Immovable = 'Immobilier',
  Advice = 'Conseil',
  Health = 'Santé'
}
export declare enum ClientSource {
  None = '-None-',
  AddedByUser = 'Ajouté par l\'utilisateur',
  API = 'API',
  Imported = 'Importer',
  Intern = 'Interne',
  ImportedFromZohoCRM = 'Importé depuis Zoho CRM'
}
export declare class RecruitContact extends RecruitRecord {
//TODO: Add the var from the other class 
  public lastname: string;
  public firstname?: string;
  public salutation?: Salutation;
  public email?: string;
  public secondEmail?: string;
  public emailOptOut?: boolean;
  public department?: string;
  public phone?: string;
  public mobile?: string;
  public isPrimary?: boolean;
  public hasAttachment?: boolean;
  public service?: string;
  public fax?: string;
  public jobTitle?: string;
  public client?: User;
  public skypeId?: string;
  public twitter?: string;
  public clientName?: string;
  public contactKind?: ContactKind;
  public source?: ContactSource;
  public address?: Address;
  public mailingAddress?: Address;
  public marque?: ContactMarque;
  public description?: string;
  constructor(raw: any  );
}
export declare enum ContactSource {
  None = '-None-',
  AddedByUser = 'Ajouté par l’utilisateur',
  Ad = 'Publicité',
  API = 'API',
  IncomingCall = 'Appel entrant',
  Incorporate = 'Incorporer',
  EmployeeReference = 'Référence d’employé',
  ExternalReference = 'Référence externe',
  Facebook = 'Facebook',
  Gapps = 'Gapps',
  Google = 'Google',
  Import = 'Importer',
  Internal = 'Interne',
  Partner = 'Partenaire',
  PublicRelations = 'Relations Publiques',
  SearchEngine = 'Moteur de recherche',
  LivingRoom = 'Salon',
  Twitter = 'Twitter',
  WebForm = 'Formulaire Web',
  ImportedFromZohoCRM = 'Importé depuis Zoho CRM'
}
export declare enum ContactKind {
  None = '-None-',
  Company = 'Entreprise',
  Consultant = 'Consultant'
}
export declare enum ContactMarque {
  None = '-None-',
  ValorPortage = 'Valorportage',
  Admissions = 'Admissions',
  Provigis = 'Provigis',
  Freelance = 'Freelance.com'
}
export declare class JobOpening extends RecruitRecord {
//TODO: Add the var from the other class 
  public title: string;
  public client?: User;
  public openedAt?: Date;
  public state?: JobOpeningState;
  public jobOpeningStatus?: JobOpeningStatus;
  public source?: string;
  public productFamily?: ProductFamily;
  public contactName?: string;
  public jobKind?: JobKind;
  public freelancePartner?: string;
  public industry?: string;
  public address?: Address;
  public experience?: string;
  public commercial?: string;
  public hot?: boolean;
  public numberOfPositions?: number;
  public recruiter?: User;
  public isLocked?: boolean;
  public hasAttachment?: boolean;
  constructor(raw: any  );
  public Populate(raw: XmlValue[]): void;
  public toXML(): any;
}
export declare enum JobOpeningState {
  None = '-None-',
  Won = 'Gagné',
  Lost = 'Perdu'
}
export declare enum JobKind {
  None = '-None-',
  FullTime = 'Temps pleins',
  PartialTime = 'Temps partiel',
  Temporary = 'Temporaire',
  Contract = 'Contrat',
  Any = 'N’importe lequel',
  Permanent = 'Permanent',
  Training = 'Formation',
  Volunteer = 'Bénévole',
  Seasonal = 'Saisonnier',
  Independent = 'Indépendant'
}
export declare enum JobOpeningStatus {
  None = '-None-',
  InProgress = 'En cours',
  Received = 'Reçu',
  Qualifying = 'En cours de qualification',
  Qualified = 'Qualifié',
  Treaded = 'Traité',
  Won = 'Gagné',
  Lost = 'Perdu',
  Drop = 'Drop',
  Cancel = 'Annulé',
  Abandonned = 'Abandonné',
  NoResponse = 'Sans réponse'
}
export declare enum ProductFamily {
  None = '-None-',
  SalarialPortage = 'Portage salarial',
  AdministrativPortage = 'Portage administratif',
  Provigis = 'Provigis'
}
export interface Populater {
  Populate(): void
}
export declare enum Salutation {
  None = '-None-',
  Mr = 'Mr',
  Mme = 'Mme',
  Mlle = 'Mlle'
}
export interface Xmler {
  toXML(): any
}
export declare abstract class RecruitRecord implements Xmler {
  public id: string;
  public gid: string;
  public ownedBy: User;
  public createdBy: User;
  public modifiedBy: User;
  public createdAt: Date;
  public modifiedAt: Date;
  public lastActivityTime: Date;
  constructor(raw: any  );
}
export interface User {
  id: string,
  name: string
}
export interface XmlValue {
  val: string,
  content: string
}
export interface RecruitConfig {
  url: string
  signinUrl: string
  token?: string
  searchRecordsToken?: string
  email: string
  password: string
}
export interface Address {
  street?: string
  city?: string
  country?: string
  state?: string
  zipCode?: string
}
export declare class Recruit extends Client {
//TODO: Add the var from the other class 
  public module: any;
  constructor(requester: http.Requester, config: RecruitConfig);
  public Signin(): Promise<http.Response>;
  public GetModules(): Promise<http.Response>;
  public GetRecords(params: GetRecruitRecordsParams): Promise<http.Response>;
  public GetClients(p: BaseGetRecruitRecordsParams): Promise<ClientCompany[]>;
  public GetContacts(p: BaseGetRecruitRecordsParams): Promise<RecruitContact[]>;
  public GetJobOpenings(p: BaseGetRecruitRecordsParams): Promise<JobOpening[]>;
  public GetCandidates(p: BaseGetRecruitRecordsParams): Promise<Candidate[]>;
  public GetFields(params: GetFieldsParams): Promise<http.Response>;
  public AddRecords(params: AddRecordsParams): Promise<http.Response>;
  public AddContacts(); //TODO : Put the params in here
  public AddCandidates(); //TODO : Put the params in here
  public AddClients(); //TODO : Put the params in here
  public AddJobOpenings(); //TODO : Put the params in here
  public UpdateRecord(params: UpdateRecordParams): Promise<http.Response>;
  public UpdateContact(contact: RecruitContact): Promise<http.Response>;
  public UpdateClient(client: ClientCompany): Promise<http.Response>;
  public UpdateCandidate(candidate: Candidate): Promise<http.Response>;
  public UpdateJobOpening(jobOpening: JobOpening): Promise<http.Response>;
  public GetSearchRecords(params: GetSearchRecordsParams): Promise<http.Response>;
  public GetSearchCandidates(params: GetSearchRecordsParams): Promise<Candidate[]>;
  public GetSearchClients(params: GetSearchRecordsParams): Promise<ClientCompany[]>;
  public GetSearchJobOpenings(params: GetSearchRecordsParams): Promise<JobOpening[]>;
  public GetSearchContact(params: GetSearchRecordsParams): Promise<RecruitContact[]>;
  // public SearchRecords(params: SearchRecordsParams): Promise<http.Response>;
//TODO: Add the var from the other class 
}
export interface GetSearchRecordsParams {
  module: RecruitModuleName
  selectColumns: string[] | 'All'
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
// export interface GetSearchRecordsParams {
//   module: RecruitModuleName
//   selectColumns: string[]
//   searchCondition: GetSearchCondition
//   version: number
//   newFormat?: number
// }

export interface SearchCriteria {
  field: string
  search: string
}
export interface SearchCriteria {
  field: string
  search: string
}
export interface GetSearchCondition extends SearchCriteria {
  operator: SearchOperator
}
export declare enum SearchOperator {
  EQ = '=',
  NE = '<>',
  LT = '<',
  GT = '>',
  LTE = '<=',
  GTE = '=>',

  Contains = 'contains',
  StartsWith = 'starts with',
  EndsWith = 'ends with',
  DoesntContain = "doesn't contain"
}
export declare enum RecruitModuleName {
  Candidates = 'Candidates',
  Clients = 'Clients',
  Contacts = 'Contacts',
  JobOpenings = 'JobOpenings',
  Tasks = 'Tasks',
  Events = 'Events',
  Calls = 'Calls',
  Interviews = 'Interviews'
}
export declare enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
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
export const DefaultBaseAddRecordsParams = { version: 1 };
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
export interface Config {
  verbose: boolean
  debug: boolean
  crm: CrmConfig
  recruit: RecruitConfig
}

