interface PersonalInformation {
  fullName: string;
  phone: string;
  gender: string;
  bvn: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
  email: string;
}
interface EducationAndEmployment {
  levelOfEducation: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeemail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

interface Socials {
  twitter: string;
  faceBook: string;
  instagram: string;
}

interface Guarantor {
  fullName: string;
  email: string;
  phone: string;
  relationship: string;
}

export interface User {
  email?: string;
  id: string;
  createdAt: string;
  organization: string;
  status: string;
  personalInformation: PersonalInformation;
  educationAndEmployment: EducationAndEmployment;
  socials: Socials;
  apiKey: string;
  guarantor: Guarantor;
}
