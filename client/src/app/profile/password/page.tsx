import AuthHeader from '@/components/ui/auth-header/AuthHeader';
import s from './password.module.scss'
import NavBlock from '@/components/layout/navblock-profile/NavBlock';
import { inputPassword } from '@/helpers/input-password';

import InputPassword from '@/components/ui/input-password/InputPassword';

const page:React.FC= () => {
	
	return (
		<>
			<AuthHeader/>
			<NavBlock/>
			<div className={s.password}>
					<div className={s.inputWrap}>
						{inputPassword.map((item) => 
							<InputPassword  text={item.text}/>)}
							<button>Change Password</button>
					</div>
			</div>
		</>
	)
}
export default page;