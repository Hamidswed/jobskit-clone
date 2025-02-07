type Company = {
  id: number;
  name: string;
  industry: string;
  description: string | null;
  address: string | null;
  phone: string;
  email: string | null;
  size: number;
  imageId: number;
  imageURL: string;
};

export type Category = {
  id: number;
  name: string;
  slug?: string;
  icon?: string | null;
};

type SubCategory = {
  id: number;
  name: string;
  slug: string;
};

type Speciality = {
  id: number;
  name: string;
  slug: string;
};

export type Job = {
  id: number;
  title: string;
  featured?: boolean;
  datePosted?: string;
  expirationDate?: string;
  employmentType?: string;
  positionLevel?: string;
  company?: Company;
  country?: string;
  location?: string;
  category: Category;
  subCategory?: SubCategory;
  speciality?: Speciality;
  jobType?: string;
  views?: number;
  shares?: number;
  isBookmarked:boolean
};
