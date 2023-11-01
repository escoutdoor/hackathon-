
import s from './form.module.scss'

const Form:React.FC = () => {
	
	return (
		<>
			<form className={s.formWrap}>
			<div className={s.userName}>
				<div className={s.name}>
					<p className={s.title}>First name</p>
					<input type='text'/>
				</div>
				<div className={s.name}>
					<p className={s.title}>Last name</p>
					<input type='text'/>
				</div>
			</div>
				<div className={s.email}>
					<p className={s.title}>Email</p>
					<input type='email'/>
				</div>
					<div className={s.data}>
						<div className={s.dataWrap}>
								<p className={s.title}>Date of Birth</p>
								<div className={s.dataInputs}>
									<input type='text' maxLength={2} className={s.day}/>
									<input type='text' maxLength={2} className={s.day}/>
									<input type='text' maxLength={4} className={s.year}/>
								</div>
						</div>
					</div>

							<div className={s.checkbox}>
								<p className={s.title}>Your contact preferences:</p>
								<div className={s.checkboxWrap}>
									<div className={s.checkboxBlock}>
										<input type="checkbox" className={s.check}/>
										<div className={s.description}>
											<p className={s.checkboxTitle}>More for Student Beans members!</p>
											<p>Receive notifications about increased discounts, what's hot and up to 50% off discount events. Honestly, you won't regret it.</p>
										</div>
									</div>
									<div className={s.checkboxBlock}>
											<input type="checkbox" className={s.check}/>
											<div className={s.description}>
												<p className={s.checkboxTitle}>Your brands</p>
												<p>Stay in the know with emails from the brands you choose to get codes from.</p>
											</div>
									</div>
								</div>
							</div>

							<button className={s.formBtn}>Save Changes</button>
					</form>
		</>
	)
}
export default Form;