/** Type definition for Student type in Firebase. */

export interface Student {
  firstName: string,
  lastName: string,
  email: string,
  major?: string,
  graduationYear?: number,
  latestWorkshopCompletion?: WorkshopCompletion,
  alumniInfo?: AlumniInfo,
}

export interface WorkshopCompletion {
  year: number,
  recommendedForReferral: boolean,
}

export interface AlumniInfo {
  currentCompany: string,
  willingToRefer: boolean,
  willingToChat: boolean,
}