import { IEmployeeMySuffix } from 'app/shared/model//employee-my-suffix.model';

export interface IDepartmentMySuffix {
  id?: number;
  departmentName?: string;
  employees?: IEmployeeMySuffix[];
  locationId?: number;
}

export const defaultValue: Readonly<IDepartmentMySuffix> = {};
