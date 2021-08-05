import Map from '../../assets/map.jfif'
import './style.scss'

const ContactDetails = () => {
	return (
		<div className="contact_details container-fluid">
			<div className="row">
				<div className="col-lg-6 col-12">
					<div className="content">
						<h1>Contact Us</h1>

						<div className="table-responsive">
							<table className="table table-bordered">
								<tbody>
									<tr>
										<th>Restaurant Name: </th>
										<td>24 Hours Italian Restaurant</td>
									</tr>

									<tr>
										<th>Type of Restaurant: </th>
										<td>Italian ( Sole Trader)</td>
									</tr>

									<tr>
										<th>Address: </th>
										<td>Unit 1, Chancerygate Industrial Cent, Horton Close, West Drayton UB7 8EW. United Kingdom</td>
									</tr>

									<tr>
										<th>Opening hours: </th>
										<td>12:30 PM to 12:00 AM (7 days a week)</td>
									</tr>

									<tr>
										<th>Contact No: </th>
										<td>01895447000</td>
									</tr>

									<tr>
										<th>Customer email: </th>
										<td>Clearbusiness.adrianvenoin@gmail.com</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="col-lg-6 d-lg-block d-none resturent_image">
					<img src={Map} alt="resturent" />
				</div>
			</div>
		</div>
	)
}

export default ContactDetails
