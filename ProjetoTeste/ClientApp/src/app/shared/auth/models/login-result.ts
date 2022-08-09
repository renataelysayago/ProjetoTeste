import { Permissao } from '../../models/enums/permissao';
import { UserInfo } from './user';

export interface LoginResult {
  user: UserInfo;
  token: string;
  usuarioCia: boolean;
  permissoes: Permissao[];
}