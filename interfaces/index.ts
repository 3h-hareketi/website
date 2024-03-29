import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: "Aggregate";
  count: Scalars["Int"];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: "Asset";
  avatarAuthor: Array<Author>;
  coverImagePost: Array<Post>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars["String"];
  /** The file handle */
  handle: Scalars["String"];
  /** The height of the file */
  height?: Maybe<Scalars["Float"]>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  imagePerson: Array<Person>;
  imageProject: Array<Project>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  reportReport: Array<Report>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars["Float"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"];
  /** The file width */
  width?: Maybe<Scalars["Float"]>;
};

/** Asset system model */
export type AssetAvatarAuthorArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuthorWhereInput>;
};

/** Asset system model */
export type AssetCoverImagePostArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PostWhereInput>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetImagePersonArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PersonOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PersonWhereInput>;
};

/** Asset system model */
export type AssetImageProjectArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProjectWhereInput>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetReportReportArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ReportOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReportWhereInput>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: "AssetConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  avatarAuthor?: InputMaybe<AuthorCreateManyInlineInput>;
  coverImagePost?: InputMaybe<PostCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  imagePerson?: InputMaybe<PersonCreateManyInlineInput>;
  imageProject?: InputMaybe<ProjectCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  reportReport?: InputMaybe<ReportCreateManyInlineInput>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: "AssetEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  avatarAuthor_every?: InputMaybe<AuthorWhereInput>;
  avatarAuthor_none?: InputMaybe<AuthorWhereInput>;
  avatarAuthor_some?: InputMaybe<AuthorWhereInput>;
  coverImagePost_every?: InputMaybe<PostWhereInput>;
  coverImagePost_none?: InputMaybe<PostWhereInput>;
  coverImagePost_some?: InputMaybe<PostWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  imagePerson_every?: InputMaybe<PersonWhereInput>;
  imagePerson_none?: InputMaybe<PersonWhereInput>;
  imagePerson_some?: InputMaybe<PersonWhereInput>;
  imageProject_every?: InputMaybe<ProjectWhereInput>;
  imageProject_none?: InputMaybe<ProjectWhereInput>;
  imageProject_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reportReport_every?: InputMaybe<ReportWhereInput>;
  reportReport_none?: InputMaybe<ReportWhereInput>;
  reportReport_some?: InputMaybe<ReportWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetUpdateInput = {
  avatarAuthor?: InputMaybe<AuthorUpdateManyInlineInput>;
  coverImagePost?: InputMaybe<PostUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  imagePerson?: InputMaybe<PersonUpdateManyInlineInput>;
  imageProject?: InputMaybe<ProjectUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  reportReport?: InputMaybe<ReportUpdateManyInlineInput>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  avatarAuthor_every?: InputMaybe<AuthorWhereInput>;
  avatarAuthor_none?: InputMaybe<AuthorWhereInput>;
  avatarAuthor_some?: InputMaybe<AuthorWhereInput>;
  coverImagePost_every?: InputMaybe<PostWhereInput>;
  coverImagePost_none?: InputMaybe<PostWhereInput>;
  coverImagePost_some?: InputMaybe<PostWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  imagePerson_every?: InputMaybe<PersonWhereInput>;
  imagePerson_none?: InputMaybe<PersonWhereInput>;
  imagePerson_some?: InputMaybe<PersonWhereInput>;
  imageProject_every?: InputMaybe<ProjectWhereInput>;
  imageProject_none?: InputMaybe<ProjectWhereInput>;
  imageProject_some?: InputMaybe<ProjectWhereInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reportReport_every?: InputMaybe<ReportWhereInput>;
  reportReport_none?: InputMaybe<ReportWhereInput>;
  reportReport_some?: InputMaybe<ReportWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Author = Node & {
  __typename?: "Author";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Author>;
  /** List of Author versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  name: Scalars["String"];
  picture?: Maybe<Asset>;
  posts: Array<Post>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type AuthorCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type AuthorHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type AuthorPictureArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorPostsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PostWhereInput>;
};

export type AuthorPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AuthorUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AuthorWhereUniqueInput;
};

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: "AuthorConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AuthorEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AuthorCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  picture?: InputMaybe<AssetCreateOneInlineInput>;
  posts?: InputMaybe<PostCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Create and connect multiple existing Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>;
};

export type AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>;
};

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: "AuthorEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Author;
};

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_none?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_some?: InputMaybe<AuthorWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<AssetWhereInput>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AuthorOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type AuthorUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<AssetUpdateOneInlineInput>;
  posts?: InputMaybe<PostUpdateManyInlineInput>;
};

export type AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorConnectInput>>;
  /** Create and connect multiple Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>;
  /** Delete multiple Author documents */
  delete?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Disconnect multiple Author documents */
  disconnect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Author documents */
  set?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Update multiple Author documents */
  update?: InputMaybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Author documents */
  upsert?: InputMaybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>;
};

export type AuthorUpdateManyInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AuthorUpdateManyInput;
  /** Document search */
  where: AuthorWhereInput;
};

export type AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>;
  /** Delete currently connected Author document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Author document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Author document */
  update?: InputMaybe<AuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Author document */
  upsert?: InputMaybe<AuthorUpsertWithNestedWhereUniqueInput>;
};

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AuthorUpdateInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput;
  /** Update document if it exists */
  update: AuthorUpdateInput;
};

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AuthorUpsertInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AuthorWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type AuthorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_none?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_some?: InputMaybe<AuthorWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<AssetWhereInput>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AuthorWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AuthorWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: "Color";
  css: Scalars["String"];
  hex: Scalars["Hex"];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars["Hex"]>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]>;
};

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx",
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: "DocumentVersion";
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["Json"]>;
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  En = "en",
  /** System locale */
  Tr = "tr",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: "Location";
  distance: Scalars["Float"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

export type Mutation = {
  __typename?: "Mutation";
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one author */
  createAuthor?: Maybe<Author>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one person */
  createPerson?: Maybe<Person>;
  /** Create one post */
  createPost?: Maybe<Post>;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Create one report */
  createReport?: Maybe<Report>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Author documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthorsConnection)
   */
  deleteManyAuthors: BatchPayload;
  /** Delete many Author documents, return deleted documents */
  deleteManyAuthorsConnection: AuthorConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Person documents
   * @deprecated Please use the new paginated many mutation (deleteManyPeopleConnection)
   */
  deleteManyPeople: BatchPayload;
  /** Delete many Person documents, return deleted documents */
  deleteManyPeopleConnection: PersonConnection;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /**
   * Delete many Report documents
   * @deprecated Please use the new paginated many mutation (deleteManyReportsConnection)
   */
  deleteManyReports: BatchPayload;
  /** Delete many Report documents, return deleted documents */
  deleteManyReportsConnection: ReportConnection;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one person from _all_ existing stages. Returns deleted document. */
  deletePerson?: Maybe<Person>;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Delete one report from _all_ existing stages. Returns deleted document. */
  deleteReport?: Maybe<Report>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one author */
  publishAuthor?: Maybe<Author>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Author documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthorsConnection)
   */
  publishManyAuthors: BatchPayload;
  /** Publish many Author documents */
  publishManyAuthorsConnection: AuthorConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Person documents
   * @deprecated Please use the new paginated many mutation (publishManyPeopleConnection)
   */
  publishManyPeople: BatchPayload;
  /** Publish many Person documents */
  publishManyPeopleConnection: PersonConnection;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload;
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /**
   * Publish many Report documents
   * @deprecated Please use the new paginated many mutation (publishManyReportsConnection)
   */
  publishManyReports: BatchPayload;
  /** Publish many Report documents */
  publishManyReportsConnection: ReportConnection;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one person */
  publishPerson?: Maybe<Person>;
  /** Publish one post */
  publishPost?: Maybe<Post>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Publish one report */
  publishReport?: Maybe<Report>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one author */
  schedulePublishAuthor?: Maybe<Author>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one person */
  schedulePublishPerson?: Maybe<Person>;
  /** Schedule to publish one post */
  schedulePublishPost?: Maybe<Post>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>;
  /** Schedule to publish one report */
  schedulePublishReport?: Maybe<Report>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAuthor?: Maybe<Author>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPerson?: Maybe<Person>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost?: Maybe<Post>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>;
  /** Unpublish one report from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReport?: Maybe<Report>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<Author>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Author documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthorsConnection)
   */
  unpublishManyAuthors: BatchPayload;
  /** Find many Author documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAuthorsConnection: AuthorConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Person documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPeopleConnection)
   */
  unpublishManyPeople: BatchPayload;
  /** Find many Person documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPeopleConnection: PersonConnection;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Unpublish many Report documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReportsConnection)
   */
  unpublishManyReports: BatchPayload;
  /** Find many Report documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReportsConnection: ReportConnection;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPerson?: Maybe<Person>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Unpublish one report from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReport?: Maybe<Report>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one author */
  updateAuthor?: Maybe<Author>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many authors
   * @deprecated Please use the new paginated many mutation (updateManyAuthorsConnection)
   */
  updateManyAuthors: BatchPayload;
  /** Update many Author documents */
  updateManyAuthorsConnection: AuthorConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many people
   * @deprecated Please use the new paginated many mutation (updateManyPeopleConnection)
   */
  updateManyPeople: BatchPayload;
  /** Update many Person documents */
  updateManyPeopleConnection: PersonConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload;
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /**
   * Update many reports
   * @deprecated Please use the new paginated many mutation (updateManyReportsConnection)
   */
  updateManyReports: BatchPayload;
  /** Update many Report documents */
  updateManyReportsConnection: ReportConnection;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one person */
  updatePerson?: Maybe<Person>;
  /** Update one post */
  updatePost?: Maybe<Post>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Update one report */
  updateReport?: Maybe<Report>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one person */
  upsertPerson?: Maybe<Person>;
  /** Upsert one post */
  upsertPost?: Maybe<Post>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Upsert one report */
  upsertReport?: Maybe<Report>;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};

export type MutationCreatePageArgs = {
  data: PageCreateInput;
};

export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};

export type MutationCreatePostArgs = {
  data: PostCreateInput;
};

export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationCreateReportArgs = {
  data: ReportCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAuthorsArgs = {
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationDeleteManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationDeleteManyPeopleArgs = {
  where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationDeleteManyPeopleConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationDeleteManyPostsArgs = {
  where?: InputMaybe<PostManyWhereInput>;
};

export type MutationDeleteManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PostManyWhereInput>;
};

export type MutationDeleteManyProjectsArgs = {
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationDeleteManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationDeleteManyReportsArgs = {
  where?: InputMaybe<ReportManyWhereInput>;
};

export type MutationDeleteManyReportsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReportManyWhereInput>;
};

export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};

export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type MutationDeleteReportArgs = {
  where: ReportWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishAuthorArgs = {
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAuthorsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationPublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationPublishManyPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyPeopleArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<PersonManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyPeopleConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<PersonManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyPostsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProjectsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyReportsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ReportManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyReportsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ReportManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishPersonArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: PersonWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishPostArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishProjectArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishReportArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: ReportWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishAuthorArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};

export type MutationSchedulePublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishPersonArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: PersonWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishPostArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishProjectArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishReportArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: ReportWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishAuthorArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: AuthorWhereUniqueInput;
};

export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: PageWhereUniqueInput;
};

export type MutationScheduleUnpublishPersonArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: PersonWhereUniqueInput;
};

export type MutationScheduleUnpublishPostArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: PostWhereUniqueInput;
};

export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: ProjectWhereUniqueInput;
};

export type MutationScheduleUnpublishReportArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: ReportWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishAuthorArgs = {
  from?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAuthorsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUnpublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUnpublishManyPeopleArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUnpublishManyPeopleConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUnpublishManyPostsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<PostManyWhereInput>;
};

export type MutationUnpublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<PostManyWhereInput>;
};

export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUnpublishManyReportsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<ReportManyWhereInput>;
};

export type MutationUnpublishManyReportsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<ReportManyWhereInput>;
};

export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: PageWhereUniqueInput;
};

export type MutationUnpublishPersonArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: PersonWhereUniqueInput;
};

export type MutationUnpublishPostArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: PostWhereUniqueInput;
};

export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: ProjectWhereUniqueInput;
};

export type MutationUnpublishReportArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: ReportWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAuthorsArgs = {
  data: AuthorUpdateManyInput;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUpdateManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: AuthorUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUpdateManyPeopleArgs = {
  data: PersonUpdateManyInput;
  where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUpdateManyPeopleConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: PersonUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyInput;
  where?: InputMaybe<PostManyWhereInput>;
};

export type MutationUpdateManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: PostUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PostManyWhereInput>;
};

export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUpdateManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: ProjectUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUpdateManyReportsArgs = {
  data: ReportUpdateManyInput;
  where?: InputMaybe<ReportManyWhereInput>;
};

export type MutationUpdateManyReportsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: ReportUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReportManyWhereInput>;
};

export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};

export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpdateReportArgs = {
  data: ReportUpdateInput;
  where: ReportWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertAuthorArgs = {
  upsert: AuthorUpsertInput;
  where: AuthorWhereUniqueInput;
};

export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};

export type MutationUpsertPersonArgs = {
  upsert: PersonUpsertInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpsertPostArgs = {
  upsert: PostUpsertInput;
  where: PostWhereUniqueInput;
};

export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpsertReportArgs = {
  upsert: ReportUpsertInput;
  where: ReportWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: "Page";
  content?: Maybe<PageContentRichText>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars["String"];
  /** System stage field */
  stage: Stage;
  title: Scalars["String"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PageCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type PageHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type PageLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PagePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PageUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: "PageConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageContentRichText = {
  __typename?: "PageContentRichText";
  /** Returns HTMl representation */
  html: Scalars["String"];
  json: Scalars["RichTextAST"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** @deprecated Please use the 'json' field */
  raw: Scalars["RichTextAST"];
  references: Array<PageContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

export type PageContentRichTextEmbeddedTypes = Asset;

export type PageCreateInput = {
  /** content input for default locale (tr) */
  content?: InputMaybe<Scalars["RichTextAST"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageCreateLocalizationsInput>;
  /** slug input for default locale (tr) */
  slug: Scalars["String"];
  /** title input for default locale (tr) */
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PageCreateLocalizationDataInput = {
  content?: InputMaybe<Scalars["RichTextAST"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: "PageEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type PageUpdateInput = {
  /** content input for default locale (tr) */
  content?: InputMaybe<Scalars["RichTextAST"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<PageUpdateLocalizationsInput>;
  /** slug input for default locale (tr) */
  slug?: InputMaybe<Scalars["String"]>;
  /** title input for default locale (tr) */
  title?: InputMaybe<Scalars["String"]>;
};

export type PageUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars["RichTextAST"]>;
  slug?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PageUpsertLocalizationInput>>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  /** content input for default locale (tr) */
  content?: InputMaybe<Scalars["RichTextAST"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageUpdateManyLocalizationsInput>;
};

export type PageUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars["RichTextAST"]>;
};

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateManyLocalizationInput>>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Person = Node & {
  __typename?: "Person";
  biography?: Maybe<Scalars["String"]>;
  boardOfDirectorsMember: Scalars["Boolean"];
  boardOfSupervisorsMember: Scalars["Boolean"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Person>;
  facebook?: Maybe<Scalars["String"]>;
  fullName: Scalars["String"];
  /** List of Person versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  image?: Maybe<Asset>;
  instagram?: Maybe<Scalars["String"]>;
  linkedIn?: Maybe<Scalars["String"]>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Person>;
  order?: Maybe<Scalars["Int"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  role: Scalars["String"];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  twitter?: Maybe<Scalars["String"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type PersonCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PersonCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PersonDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type PersonHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type PersonImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PersonLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type PersonPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PersonPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PersonScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type PersonUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PersonUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PersonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PersonWhereUniqueInput;
};

/** A connection to a list of items. */
export type PersonConnection = {
  __typename?: "PersonConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PersonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PersonCreateInput = {
  /** biography input for default locale (tr) */
  biography?: InputMaybe<Scalars["String"]>;
  boardOfDirectorsMember: Scalars["Boolean"];
  boardOfSupervisorsMember: Scalars["Boolean"];
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  facebook?: InputMaybe<Scalars["String"]>;
  fullName: Scalars["String"];
  image?: InputMaybe<AssetCreateOneInlineInput>;
  instagram?: InputMaybe<Scalars["String"]>;
  linkedIn?: InputMaybe<Scalars["String"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PersonCreateLocalizationsInput>;
  order?: InputMaybe<Scalars["Int"]>;
  /** role input for default locale (tr) */
  role: Scalars["String"];
  twitter?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PersonCreateLocalizationDataInput = {
  biography?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  role: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PersonCreateLocalizationInput = {
  /** Localization input */
  data: PersonCreateLocalizationDataInput;
  locale: Locale;
};

export type PersonCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PersonCreateLocalizationInput>>;
};

export type PersonCreateManyInlineInput = {
  /** Connect multiple existing Person documents */
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Create and connect multiple existing Person documents */
  create?: InputMaybe<Array<PersonCreateInput>>;
};

export type PersonCreateOneInlineInput = {
  /** Connect one existing Person document */
  connect?: InputMaybe<PersonWhereUniqueInput>;
  /** Create and connect one Person document */
  create?: InputMaybe<PersonCreateInput>;
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: "PersonEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Person;
};

/** Identifies documents */
export type PersonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  boardOfDirectorsMember?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  boardOfDirectorsMember_not?: InputMaybe<Scalars["Boolean"]>;
  boardOfSupervisorsMember?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  boardOfSupervisorsMember_not?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PersonWhereStageInput>;
  documentInStages_none?: InputMaybe<PersonWhereStageInput>;
  documentInStages_some?: InputMaybe<PersonWhereStageInput>;
  facebook?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  facebook_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  facebook_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  facebook_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  facebook_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  facebook_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  facebook_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  facebook_starts_with?: InputMaybe<Scalars["String"]>;
  fullName?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  fullName_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  instagram?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  instagram_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  instagram_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  instagram_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  instagram_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  instagram_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  instagram_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  instagram_starts_with?: InputMaybe<Scalars["String"]>;
  linkedIn?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  linkedIn_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  linkedIn_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  linkedIn_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  linkedIn_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  linkedIn_starts_with?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  twitter?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  twitter_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  twitter_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  twitter_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  twitter_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  twitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  twitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  twitter_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PersonOrderByInput {
  BiographyAsc = "biography_ASC",
  BiographyDesc = "biography_DESC",
  BoardOfDirectorsMemberAsc = "boardOfDirectorsMember_ASC",
  BoardOfDirectorsMemberDesc = "boardOfDirectorsMember_DESC",
  BoardOfSupervisorsMemberAsc = "boardOfSupervisorsMember_ASC",
  BoardOfSupervisorsMemberDesc = "boardOfSupervisorsMember_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FacebookAsc = "facebook_ASC",
  FacebookDesc = "facebook_DESC",
  FullNameAsc = "fullName_ASC",
  FullNameDesc = "fullName_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  InstagramAsc = "instagram_ASC",
  InstagramDesc = "instagram_DESC",
  LinkedInAsc = "linkedIn_ASC",
  LinkedInDesc = "linkedIn_DESC",
  OrderAsc = "order_ASC",
  OrderDesc = "order_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  RoleAsc = "role_ASC",
  RoleDesc = "role_DESC",
  TwitterAsc = "twitter_ASC",
  TwitterDesc = "twitter_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type PersonUpdateInput = {
  /** biography input for default locale (tr) */
  biography?: InputMaybe<Scalars["String"]>;
  boardOfDirectorsMember?: InputMaybe<Scalars["Boolean"]>;
  boardOfSupervisorsMember?: InputMaybe<Scalars["Boolean"]>;
  facebook?: InputMaybe<Scalars["String"]>;
  fullName?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  instagram?: InputMaybe<Scalars["String"]>;
  linkedIn?: InputMaybe<Scalars["String"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<PersonUpdateLocalizationsInput>;
  order?: InputMaybe<Scalars["Int"]>;
  /** role input for default locale (tr) */
  role?: InputMaybe<Scalars["String"]>;
  twitter?: InputMaybe<Scalars["String"]>;
};

export type PersonUpdateLocalizationDataInput = {
  biography?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
};

export type PersonUpdateLocalizationInput = {
  data: PersonUpdateLocalizationDataInput;
  locale: Locale;
};

export type PersonUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PersonCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PersonUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PersonUpsertLocalizationInput>>;
};

export type PersonUpdateManyInlineInput = {
  /** Connect multiple existing Person documents */
  connect?: InputMaybe<Array<PersonConnectInput>>;
  /** Create and connect multiple Person documents */
  create?: InputMaybe<Array<PersonCreateInput>>;
  /** Delete multiple Person documents */
  delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Disconnect multiple Person documents */
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Person documents */
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Update multiple Person documents */
  update?: InputMaybe<Array<PersonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Person documents */
  upsert?: InputMaybe<Array<PersonUpsertWithNestedWhereUniqueInput>>;
};

export type PersonUpdateManyInput = {
  /** biography input for default locale (tr) */
  biography?: InputMaybe<Scalars["String"]>;
  boardOfDirectorsMember?: InputMaybe<Scalars["Boolean"]>;
  boardOfSupervisorsMember?: InputMaybe<Scalars["Boolean"]>;
  facebook?: InputMaybe<Scalars["String"]>;
  fullName?: InputMaybe<Scalars["String"]>;
  instagram?: InputMaybe<Scalars["String"]>;
  linkedIn?: InputMaybe<Scalars["String"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PersonUpdateManyLocalizationsInput>;
  order?: InputMaybe<Scalars["Int"]>;
  /** role input for default locale (tr) */
  role?: InputMaybe<Scalars["String"]>;
  twitter?: InputMaybe<Scalars["String"]>;
};

export type PersonUpdateManyLocalizationDataInput = {
  biography?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
};

export type PersonUpdateManyLocalizationInput = {
  data: PersonUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PersonUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PersonUpdateManyLocalizationInput>>;
};

export type PersonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PersonUpdateManyInput;
  /** Document search */
  where: PersonWhereInput;
};

export type PersonUpdateOneInlineInput = {
  /** Connect existing Person document */
  connect?: InputMaybe<PersonWhereUniqueInput>;
  /** Create and connect one Person document */
  create?: InputMaybe<PersonCreateInput>;
  /** Delete currently connected Person document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Person document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Person document */
  update?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Person document */
  upsert?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type PersonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PersonUpdateInput;
  /** Unique document search */
  where: PersonWhereUniqueInput;
};

export type PersonUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonCreateInput;
  /** Update document if it exists */
  update: PersonUpdateInput;
};

export type PersonUpsertLocalizationInput = {
  create: PersonCreateLocalizationDataInput;
  locale: Locale;
  update: PersonUpdateLocalizationDataInput;
};

export type PersonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PersonUpsertInput;
  /** Unique document search */
  where: PersonWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PersonWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type PersonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  biography?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  biography_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  biography_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  biography_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  biography_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  biography_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  biography_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  biography_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  biography_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  biography_starts_with?: InputMaybe<Scalars["String"]>;
  boardOfDirectorsMember?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  boardOfDirectorsMember_not?: InputMaybe<Scalars["Boolean"]>;
  boardOfSupervisorsMember?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  boardOfSupervisorsMember_not?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PersonWhereStageInput>;
  documentInStages_none?: InputMaybe<PersonWhereStageInput>;
  documentInStages_some?: InputMaybe<PersonWhereStageInput>;
  facebook?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  facebook_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  facebook_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  facebook_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  facebook_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  facebook_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  facebook_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  facebook_starts_with?: InputMaybe<Scalars["String"]>;
  fullName?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  fullName_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  instagram?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  instagram_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  instagram_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  instagram_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  instagram_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  instagram_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  instagram_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  instagram_starts_with?: InputMaybe<Scalars["String"]>;
  linkedIn?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  linkedIn_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  linkedIn_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  linkedIn_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  linkedIn_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  linkedIn_starts_with?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  role?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  role_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars["String"]>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  twitter?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  twitter_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  twitter_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  twitter_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  twitter_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  twitter_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  twitter_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  twitter_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PersonWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PersonWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Person record uniquely */
export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Post = Node & {
  __typename?: "Post";
  author?: Maybe<Author>;
  content?: Maybe<RichText>;
  coverImage: Asset;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date: Scalars["Date"];
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  excerpt: Scalars["String"];
  /** List of Post versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Post>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars["String"];
  /** System stage field */
  stage: Stage;
  tags: Array<Scalars["String"]>;
  title: Scalars["String"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type PostAuthorArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PostCoverImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PostCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PostCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PostDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type PostHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type PostLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type PostPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PostPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PostScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type PostUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PostUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PostWhereUniqueInput;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: "PostConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PostEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PostCreateInput = {
  author?: InputMaybe<AuthorCreateOneInlineInput>;
  /** content input for default locale (tr) */
  content?: InputMaybe<Scalars["RichTextAST"]>;
  coverImage: AssetCreateOneInlineInput;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  date: Scalars["Date"];
  /** excerpt input for default locale (tr) */
  excerpt: Scalars["String"];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PostCreateLocalizationsInput>;
  /** slug input for default locale (tr) */
  slug: Scalars["String"];
  /** tags input for default locale (tr) */
  tags: Array<Scalars["String"]>;
  /** title input for default locale (tr) */
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PostCreateLocalizationDataInput = {
  content?: InputMaybe<Scalars["RichTextAST"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  excerpt: Scalars["String"];
  slug: Scalars["String"];
  tags: Array<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PostCreateLocalizationInput = {
  /** Localization input */
  data: PostCreateLocalizationDataInput;
  locale: Locale;
};

export type PostCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PostCreateLocalizationInput>>;
};

export type PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Create and connect multiple existing Post documents */
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: "PostEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Post;
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  author?: InputMaybe<AuthorWhereInput>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars["Date"]>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  documentInStages_every?: InputMaybe<PostWhereStageInput>;
  documentInStages_none?: InputMaybe<PostWhereStageInput>;
  documentInStages_some?: InputMaybe<PostWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PostOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExcerptAsc = "excerpt_ASC",
  ExcerptDesc = "excerpt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  TagsAsc = "tags_ASC",
  TagsDesc = "tags_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type PostUpdateInput = {
  author?: InputMaybe<AuthorUpdateOneInlineInput>;
  /** content input for default locale (tr) */
  content?: InputMaybe<Scalars["RichTextAST"]>;
  coverImage?: InputMaybe<AssetUpdateOneInlineInput>;
  date?: InputMaybe<Scalars["Date"]>;
  /** excerpt input for default locale (tr) */
  excerpt?: InputMaybe<Scalars["String"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<PostUpdateLocalizationsInput>;
  /** slug input for default locale (tr) */
  slug?: InputMaybe<Scalars["String"]>;
  /** tags input for default locale (tr) */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** title input for default locale (tr) */
  title?: InputMaybe<Scalars["String"]>;
};

export type PostUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars["RichTextAST"]>;
  excerpt?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type PostUpdateLocalizationInput = {
  data: PostUpdateLocalizationDataInput;
  locale: Locale;
};

export type PostUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PostCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PostUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PostUpsertLocalizationInput>>;
};

export type PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostConnectInput>>;
  /** Create and connect multiple Post documents */
  create?: InputMaybe<Array<PostCreateInput>>;
  /** Delete multiple Post documents */
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: InputMaybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: InputMaybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
};

export type PostUpdateManyInput = {
  /** content input for default locale (tr) */
  content?: InputMaybe<Scalars["RichTextAST"]>;
  date?: InputMaybe<Scalars["Date"]>;
  /** excerpt input for default locale (tr) */
  excerpt?: InputMaybe<Scalars["String"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PostUpdateManyLocalizationsInput>;
  /** tags input for default locale (tr) */
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

export type PostUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars["RichTextAST"]>;
  excerpt?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

export type PostUpdateManyLocalizationInput = {
  data: PostUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PostUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PostUpdateManyLocalizationInput>>;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PostUpdateManyInput;
  /** Document search */
  where: PostWhereInput;
};

export type PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>;
  /** Delete currently connected Post document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Post document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Post document */
  update?: InputMaybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: InputMaybe<PostUpsertWithNestedWhereUniqueInput>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PostUpdateInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};

export type PostUpsertLocalizationInput = {
  create: PostCreateLocalizationDataInput;
  locale: Locale;
  update: PostUpdateLocalizationDataInput;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PostUpsertInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PostWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  author?: InputMaybe<AuthorWhereInput>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars["Date"]>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  documentInStages_every?: InputMaybe<PostWhereStageInput>;
  documentInStages_none?: InputMaybe<PostWhereStageInput>;
  documentInStages_some?: InputMaybe<PostWhereStageInput>;
  excerpt?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  excerpt_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: InputMaybe<Array<Scalars["String"]>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PostWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PostWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Project = Node & {
  __typename?: "Project";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars["String"];
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** List of Project versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Add one or more images of the project  */
  image: Array<Asset>;
  link?: Maybe<Scalars["String"]>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Project>;
  name: Scalars["String"];
  order?: Maybe<Scalars["Int"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  tags: Array<Scalars["String"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ProjectCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProjectCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type ProjectHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type ProjectImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetWhereInput>;
};

export type ProjectLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type ProjectPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProjectPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProjectUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProjectUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: "ProjectConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** description input for default locale (tr) */
  description: Scalars["String"];
  image: AssetCreateManyInlineInput;
  link?: InputMaybe<Scalars["String"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProjectCreateLocalizationsInput>;
  /** name input for default locale (tr) */
  name: Scalars["String"];
  order?: InputMaybe<Scalars["Int"]>;
  /** tags input for default locale (tr) */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProjectCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  name: Scalars["String"];
  tags?: InputMaybe<Array<Scalars["String"]>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProjectCreateLocalizationInput = {
  /** Localization input */
  data: ProjectCreateLocalizationDataInput;
  locale: Locale;
};

export type ProjectCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProjectCreateLocalizationInput>>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: "ProjectEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image_every?: InputMaybe<AssetWhereInput>;
  image_none?: InputMaybe<AssetWhereInput>;
  image_some?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  OrderAsc = "order_ASC",
  OrderDesc = "order_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TagsAsc = "tags_ASC",
  TagsDesc = "tags_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ProjectUpdateInput = {
  /** description input for default locale (tr) */
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<AssetUpdateManyInlineInput>;
  link?: InputMaybe<Scalars["String"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<ProjectUpdateLocalizationsInput>;
  /** name input for default locale (tr) */
  name?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  /** tags input for default locale (tr) */
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

export type ProjectUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

export type ProjectUpdateLocalizationInput = {
  data: ProjectUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProjectUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProjectCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProjectUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProjectUpsertLocalizationInput>>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  /** description input for default locale (tr) */
  description?: InputMaybe<Scalars["String"]>;
  link?: InputMaybe<Scalars["String"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProjectUpdateManyLocalizationsInput>;
  order?: InputMaybe<Scalars["Int"]>;
  /** tags input for default locale (tr) */
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

export type ProjectUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

export type ProjectUpdateManyLocalizationInput = {
  data: ProjectUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProjectUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProjectUpdateManyLocalizationInput>>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertLocalizationInput = {
  create: ProjectCreateLocalizationDataInput;
  locale: Locale;
  update: ProjectUpdateLocalizationDataInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image_every?: InputMaybe<AssetWhereInput>;
  image_none?: InputMaybe<AssetWhereInput>;
  image_some?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: InputMaybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: InputMaybe<Array<Scalars["String"]>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: "Query";
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single author */
  author?: Maybe<Author>;
  /** Retrieve document version */
  authorVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple authors */
  authors: Array<Author>;
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve multiple people */
  people: Array<Person>;
  /** Retrieve multiple people using the Relay connection interface */
  peopleConnection: PersonConnection;
  /** Retrieve a single person */
  person?: Maybe<Person>;
  /** Retrieve document version */
  personVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single post */
  post?: Maybe<Post>;
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single report */
  report?: Maybe<Report>;
  /** Retrieve document version */
  reportVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reports */
  reports: Array<Report>;
  /** Retrieve multiple reports using the Relay connection interface */
  reportsConnection: ReportConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};

export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAuthorArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AuthorWhereUniqueInput;
};

export type QueryAuthorVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAuthorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};

export type QueryAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
  locales?: Array<Locale>;
  stage?: Stage;
};

export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};

export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};

export type QueryPagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};

export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};

export type QueryPeopleArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryPeopleConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryPersonArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PersonWhereUniqueInput;
};

export type QueryPersonVersionArgs = {
  where: VersionWhereInput;
};

export type QueryPostArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PostWhereUniqueInput;
};

export type QueryPostVersionArgs = {
  where: VersionWhereInput;
};

export type QueryPostsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<PostWhereInput>;
};

export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<PostWhereInput>;
};

export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};

export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};

export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryReportArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ReportWhereUniqueInput;
};

export type QueryReportVersionArgs = {
  where: VersionWhereInput;
};

export type QueryReportsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReportOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ReportWhereInput>;
};

export type QueryReportsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReportOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ReportWhereInput>;
};

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: "RGBA";
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

export type Report = Node & {
  __typename?: "Report";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<Report>;
  /** List of Report versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Report>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  report: Asset;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars["String"];
  /** System stage field */
  stage: Stage;
  title: Scalars["String"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ReportCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ReportCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReportDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type ReportHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type ReportLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type ReportPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ReportPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReportReportArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReportScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ReportUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ReportUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReportConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ReportWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReportConnection = {
  __typename?: "ReportConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ReportEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReportCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** description input for default locale (tr) */
  description?: InputMaybe<Scalars["String"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ReportCreateLocalizationsInput>;
  report: AssetCreateOneInlineInput;
  /** slug input for default locale (tr) */
  slug: Scalars["String"];
  /** title input for default locale (tr) */
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ReportCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ReportCreateLocalizationInput = {
  /** Localization input */
  data: ReportCreateLocalizationDataInput;
  locale: Locale;
};

export type ReportCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ReportCreateLocalizationInput>>;
};

export type ReportCreateManyInlineInput = {
  /** Connect multiple existing Report documents */
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  /** Create and connect multiple existing Report documents */
  create?: InputMaybe<Array<ReportCreateInput>>;
};

export type ReportCreateOneInlineInput = {
  /** Connect one existing Report document */
  connect?: InputMaybe<ReportWhereUniqueInput>;
  /** Create and connect one Report document */
  create?: InputMaybe<ReportCreateInput>;
};

/** An edge in a connection. */
export type ReportEdge = {
  __typename?: "ReportEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Report;
};

/** Identifies documents */
export type ReportManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReportWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReportWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReportWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ReportWhereStageInput>;
  documentInStages_none?: InputMaybe<ReportWhereStageInput>;
  documentInStages_some?: InputMaybe<ReportWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  report?: InputMaybe<AssetWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReportOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ReportUpdateInput = {
  /** description input for default locale (tr) */
  description?: InputMaybe<Scalars["String"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<ReportUpdateLocalizationsInput>;
  report?: InputMaybe<AssetUpdateOneInlineInput>;
  /** slug input for default locale (tr) */
  slug?: InputMaybe<Scalars["String"]>;
  /** title input for default locale (tr) */
  title?: InputMaybe<Scalars["String"]>;
};

export type ReportUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ReportUpdateLocalizationInput = {
  data: ReportUpdateLocalizationDataInput;
  locale: Locale;
};

export type ReportUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ReportCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ReportUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ReportUpsertLocalizationInput>>;
};

export type ReportUpdateManyInlineInput = {
  /** Connect multiple existing Report documents */
  connect?: InputMaybe<Array<ReportConnectInput>>;
  /** Create and connect multiple Report documents */
  create?: InputMaybe<Array<ReportCreateInput>>;
  /** Delete multiple Report documents */
  delete?: InputMaybe<Array<ReportWhereUniqueInput>>;
  /** Disconnect multiple Report documents */
  disconnect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Report documents */
  set?: InputMaybe<Array<ReportWhereUniqueInput>>;
  /** Update multiple Report documents */
  update?: InputMaybe<Array<ReportUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Report documents */
  upsert?: InputMaybe<Array<ReportUpsertWithNestedWhereUniqueInput>>;
};

export type ReportUpdateManyInput = {
  /** description input for default locale (tr) */
  description?: InputMaybe<Scalars["String"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ReportUpdateManyLocalizationsInput>;
  /** title input for default locale (tr) */
  title?: InputMaybe<Scalars["String"]>;
};

export type ReportUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ReportUpdateManyLocalizationInput = {
  data: ReportUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ReportUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ReportUpdateManyLocalizationInput>>;
};

export type ReportUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReportUpdateManyInput;
  /** Document search */
  where: ReportWhereInput;
};

export type ReportUpdateOneInlineInput = {
  /** Connect existing Report document */
  connect?: InputMaybe<ReportWhereUniqueInput>;
  /** Create and connect one Report document */
  create?: InputMaybe<ReportCreateInput>;
  /** Delete currently connected Report document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Report document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Report document */
  update?: InputMaybe<ReportUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Report document */
  upsert?: InputMaybe<ReportUpsertWithNestedWhereUniqueInput>;
};

export type ReportUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReportUpdateInput;
  /** Unique document search */
  where: ReportWhereUniqueInput;
};

export type ReportUpsertInput = {
  /** Create document if it didn't exist */
  create: ReportCreateInput;
  /** Update document if it exists */
  update: ReportUpdateInput;
};

export type ReportUpsertLocalizationInput = {
  create: ReportCreateLocalizationDataInput;
  locale: Locale;
  update: ReportUpdateLocalizationDataInput;
};

export type ReportUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReportUpsertInput;
  /** Unique document search */
  where: ReportWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ReportWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type ReportWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReportWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReportWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReportWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  documentInStages_every?: InputMaybe<ReportWhereStageInput>;
  documentInStages_none?: InputMaybe<ReportWhereStageInput>;
  documentInStages_some?: InputMaybe<ReportWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  report?: InputMaybe<AssetWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ReportWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReportWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReportWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReportWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ReportWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Report record uniquely */
export type ReportWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: "RichText";
  /** Returns HTMl representation */
  html: Scalars["String"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** Returns AST representation */
  raw: Scalars["RichTextAST"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: "ScheduledOperation";
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars["Json"];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
  | Asset
  | Author
  | Page
  | Person
  | Post
  | Project
  | Report;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: "ScheduledOperationConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: "ScheduledOperationEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: "ScheduledRelease";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Whether scheduled release should be run */
  isActive: Scalars["Boolean"];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars["Boolean"];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars["String"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: "ScheduledReleaseConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: "ScheduledReleaseEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  IsImplicitAsc = "isImplicit_ASC",
  IsImplicitDesc = "isImplicit_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  ReleaseAtAsc = "releaseAt_ASC",
  ReleaseAtDesc = "releaseAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION",
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: "User";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Flag to determine if user is active or not */
  isActive: Scalars["Boolean"];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars["String"];
  /** Profile Picture url */
  picture?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: "UserConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: "UserEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Version = {
  __typename?: "Version";
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with",
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual",
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  SchedulePublish = "schedulePublish",
  ScheduleUnpublish = "scheduleUnpublish",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert",
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one",
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update",
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union",
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization",
}

export type FeaturedPostsQueryVariables = Exact<{ [key: string]: never }>;

export type FeaturedPostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "Post";
    id: string;
    date: any;
    excerpt: string;
    title: string;
    tags: Array<string>;
    slug: string;
    coverImage: { __typename?: "Asset"; url: string };
  }>;
};

export type OneCikanPostsQueryVariables = Exact<{ [key: string]: never }>;

export type OneCikanPostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "Post";
    id: string;
    date: any;
    excerpt: string;
    title: string;
    tags: Array<string>;
    slug: string;
    coverImage: { __typename?: "Asset"; url: string };
  }>;
};

export type PageQueryVariables = Exact<{
  locale: Locale;
  slug: Scalars["String"];
}>;

export type PageQuery = {
  __typename?: "Query";
  pages: Array<{
    __typename?: "Page";
    title: string;
    content?: { __typename?: "PageContentRichText"; json: any } | null;
  }>;
};

export type PagesQueryVariables = Exact<{
  locale: Locale;
}>;

export type PagesQuery = {
  __typename?: "Query";
  pages: Array<{ __typename?: "Page"; slug: string; locale: Locale }>;
};

export type PeopleQueryVariables = Exact<{
  locale: Locale;
  fallbackLocale: Locale;
}>;

export type PeopleQuery = {
  __typename?: "Query";
  people: Array<{
    __typename?: "Person";
    fullName: string;
    role: string;
    biography?: string | null;
    facebook?: string | null;
    id: string;
    boardOfDirectorsMember: boolean;
    boardOfSupervisorsMember: boolean;
    instagram?: string | null;
    linkedIn?: string | null;
    twitter?: string | null;
    image?: { __typename?: "Asset"; url: string } | null;
  }>;
};

export type PostQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type PostQuery = {
  __typename?: "Query";
  post?: {
    __typename?: "Post";
    id: string;
    title: string;
    slug: string;
    createdAt: any;
    updatedAt: any;
    tags: Array<string>;
    excerpt: string;
    coverImage: { __typename?: "Asset"; url: string };
    author?: {
      __typename?: "Author";
      name: string;
      picture?: { __typename?: "Asset"; url: string } | null;
    } | null;
    createdBy?: {
      __typename?: "User";
      name: string;
      picture?: string | null;
    } | null;
    updatedBy?: {
      __typename?: "User";
      name: string;
      picture?: string | null;
    } | null;
    content?: { __typename?: "RichText"; raw: any } | null;
  } | null;
};

export type PostsQueryVariables = Exact<{
  locale: Locale;
  fallbackLocale: Locale;
}>;

export type PostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "Post";
    id: string;
    slug: string;
    date: any;
    locale: Locale;
    title: string;
    tags: Array<string>;
    excerpt: string;
    createdAt: any;
    content?: { __typename?: "RichText"; html: string } | null;
    coverImage: { __typename?: "Asset"; url: string };
    createdBy?: { __typename?: "User"; name: string } | null;
  }>;
};

export type PostsPathsQueryVariables = Exact<{
  locale: Locale;
}>;

export type PostsPathsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "Post";
    id: string;
    slug: string;
    locale: Locale;
  }>;
};

export type ProjectsQueryVariables = Exact<{
  locale?: Locale;
  fallbackLocale: Locale;
}>;

export type ProjectsQuery = {
  __typename?: "Query";
  projects: Array<{
    __typename?: "Project";
    id: string;
    description: string;
    link?: string | null;
    name: string;
    image: Array<{ __typename?: "Asset"; url: string }>;
  }>;
};

export type ReportsQueryVariables = Exact<{ [key: string]: never }>;

export type ReportsQuery = {
  __typename?: "Query";
  reports: Array<{
    __typename?: "Report";
    id: string;
    title: string;
    slug: string;
    description?: string | null;
    report: { __typename?: "Asset"; url: string };
  }>;
};

export type SimilarPostsQueryVariables = Exact<{
  currentPost: Scalars["ID"];
  tag?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type SimilarPostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "Post";
    id: string;
    slug: string;
    date: any;
    locale: Locale;
    title: string;
    tags: Array<string>;
    excerpt: string;
    createdAt: any;
    coverImage: { __typename?: "Asset"; url: string };
    createdBy?: { __typename?: "User"; name: string } | null;
  }>;
};

export type HumanFragment = {
  __typename?: "Person";
  fullName: string;
  role: string;
  biography?: string | null;
  facebook?: string | null;
  id: string;
  boardOfDirectorsMember: boolean;
  boardOfSupervisorsMember: boolean;
  instagram?: string | null;
  linkedIn?: string | null;
  twitter?: string | null;
  image?: { __typename?: "Asset"; url: string } | null;
};

export const HumanFragmentDoc = gql`
  fragment Human on Person {
    fullName
    role
    biography
    facebook
    id
    boardOfDirectorsMember
    boardOfSupervisorsMember
    image(locales: [$locale, $fallbackLocale]) {
      url(
        transformation: {
          image: { resize: { height: 96, width: 96, fit: clip } }
        }
      )
    }
    instagram
    linkedIn
    twitter
  }
`;
export const FeaturedPostsDocument = gql`
  query FeaturedPosts {
    posts(where: { tags_contains_some: "featured" }) {
      id
      date
      excerpt
      title
      tags
      coverImage {
        url
      }
      slug
    }
  }
`;
export const OneCikanPostsDocument = gql`
  query OneCikanPosts {
    posts(where: { tags_contains_some: "Öne Çıkan" }) {
      id
      date
      excerpt
      title
      tags
      coverImage {
        url
      }
      slug
    }
  }
`;
export const PageDocument = gql`
  query Page($locale: Locale!, $slug: String!) {
    pages(where: { slug: $slug }, locales: [$locale]) {
      title
      content {
        json
      }
    }
  }
`;
export const PagesDocument = gql`
  query Pages($locale: Locale!) {
    pages(locales: [$locale]) {
      slug
      locale
    }
  }
`;
export const PeopleDocument = gql`
  query People($locale: Locale!, $fallbackLocale: Locale!) {
    people(locales: [$locale], orderBy: order_DESC) {
      ...Human
    }
  }
  ${HumanFragmentDoc}
`;
export const PostDocument = gql`
  query Post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      slug
      coverImage {
        url
      }
      createdAt
      updatedAt
      author {
        name
        picture {
          url
        }
      }
      createdBy {
        name
        picture
      }
      updatedBy {
        name
        picture
      }
      content {
        raw
      }
      tags
      excerpt
    }
  }
`;
export const PostsDocument = gql`
  query Posts($locale: Locale!, $fallbackLocale: Locale!) {
    posts(locales: [$locale]) {
      id
      slug
      content {
        html
      }
      coverImage(locales: [$locale, $fallbackLocale]) {
        url
      }
      date
      locale
      title
      tags
      excerpt
      createdAt
      createdBy {
        name
      }
    }
  }
`;
export const PostsPathsDocument = gql`
  query PostsPaths($locale: Locale!) {
    posts(locales: [$locale]) {
      id
      slug
      locale
    }
  }
`;
export const ProjectsDocument = gql`
  query Projects($locale: Locale! = tr, $fallbackLocale: Locale!) {
    projects(locales: [$locale, $fallbackLocale], orderBy: order_DESC) {
      id
      description
      image(locales: [$locale, $fallbackLocale]) {
        url
      }
      link
      name
    }
  }
`;
export const ReportsDocument = gql`
  query Reports {
    reports {
      id
      title
      slug
      description
      report {
        url
      }
    }
  }
`;
export const SimilarPostsDocument = gql`
  query SimilarPosts($currentPost: ID!, $tag: [String!]) {
    posts(where: { tags_contains_all: $tag, id_not: $currentPost }) {
      id
      slug
      coverImage {
        url
      }
      date
      locale
      title
      tags
      excerpt
      createdAt
      createdBy {
        name
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    FeaturedPosts(
      variables?: FeaturedPostsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FeaturedPostsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FeaturedPostsQuery>(FeaturedPostsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "FeaturedPosts",
        "query"
      );
    },
    OneCikanPosts(
      variables?: OneCikanPostsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<OneCikanPostsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<OneCikanPostsQuery>(OneCikanPostsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "OneCikanPosts",
        "query"
      );
    },
    Page(
      variables: PageQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<PageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PageQuery>(PageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Page",
        "query"
      );
    },
    Pages(
      variables: PagesQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<PagesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PagesQuery>(PagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Pages",
        "query"
      );
    },
    People(
      variables: PeopleQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<PeopleQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PeopleQuery>(PeopleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "People",
        "query"
      );
    },
    Post(
      variables: PostQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<PostQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PostQuery>(PostDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Post",
        "query"
      );
    },
    Posts(
      variables: PostsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<PostsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PostsQuery>(PostsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Posts",
        "query"
      );
    },
    PostsPaths(
      variables: PostsPathsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<PostsPathsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PostsPathsQuery>(PostsPathsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "PostsPaths",
        "query"
      );
    },
    Projects(
      variables: ProjectsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ProjectsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ProjectsQuery>(ProjectsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Projects",
        "query"
      );
    },
    Reports(
      variables?: ReportsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ReportsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ReportsQuery>(ReportsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Reports",
        "query"
      );
    },
    SimilarPosts(
      variables: SimilarPostsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<SimilarPostsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SimilarPostsQuery>(SimilarPostsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "SimilarPosts",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
