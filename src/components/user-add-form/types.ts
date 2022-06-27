import { IEditbleUserInfo } from '../../models/randomuser';

export interface IUserEditFormProps {
  visible: boolean,
  userInfo: IEditbleUserInfo,
  onCreate: (values: IEditbleUserInfo) => void,
  onCancel: () => void
}