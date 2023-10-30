import s from './body.module.scss'

const Body:React.FC = () => {
	
	return (
		<div className={s.block}>
			<div className={s.form}> 
				<div className={s.input}>
					<input type='file'/>
				</div>
				<form>

				</form>
				<div className={s.about}>

				</div>
			</div>
		</div>
	)
}
export default Body;