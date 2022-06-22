import { IUser } from '../../models/randomuser';
import { Buffer } from 'models';

export interface IUserEditFormProps extends  Buffer<any>,
                                              Pick< IUser,'id' 
                                                    | 'name' 
                                                    | 'email' 
                                                    | 'phone' 
                                                    | 'cell' 
                                                    | 'dob' > { }