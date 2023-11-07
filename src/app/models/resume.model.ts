import { AwardsAchivement } from "./awards-achivement.model";
import { Education } from "./education.model";
import { EmploymentHistory } from "./employment-history.model";
import { IndustrialExposure } from "./industrial-exposure.model";
import { Interest } from "./interest.model";
import { Language } from "./language.model";
import { Objective } from "./objective.model";
import { ProjectDetail } from "./project-detail.model";
import { Refrence } from "./refrence.model";
import { Skill } from "./skill.model";
import { Strength } from "./strength.model";
import { Weakness } from "./weakness.model";

export interface Resume {
    _id: string;
    name: string;
    user_id: string;
    image_url: string;
    video_url: string;
    views: number;
    contact_details: Contact;
    education: Education[];
    employment_history: EmploymentHistory[];
    skills: Skill[];
    languages: Language[];
    refrences: Refrence[];
    award_achivements: AwardsAchivement[];
    interests: Interest[];
    industrialExposures: IndustrialExposure[];
    projectDetails: ProjectDetail[];
    strengths: Strength[];
    weakness: Weakness[];
    objectives: Objective[];
  }
  
  export interface Contact {
    _id: string;
    first_name: string;
    last_name: string;
    phone_number: number;
    linkedin_url: string;
    website_url: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip_code: number;
    country: string;
    summary: string;
  }
  