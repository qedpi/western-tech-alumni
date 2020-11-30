/** Type definition for Student type in Firebase. */

export interface Student {
  firstName: string,
  lastName: string,
  schoolEmail?: string,
  preferredEmail?: string,
  expectedGraduationYear?: number,
  isGraduated?: boolean,
  latestWorkshopCompletion?: WorkshopCompletion,
  alumniEmploymentInfo?: AlumniEmploymentInfo,
}

export interface WorkshopCompletion {
  year: number,
  recommendedForReferral: boolean,
}

export interface AlumniEmploymentInfo {
  currentCompany: string,
  willingToRefer: boolean,
  willingToChat: boolean,
}