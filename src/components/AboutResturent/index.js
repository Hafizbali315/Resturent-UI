import Resturent from '../../assets/resturent.jfif'
import './style.scss'

const AboutResturent = () => {
	return (
		<div className="about_resturent container-fluid">
			<div className="row">
				<div className="col-lg-6 col-12">
					<div className="content">
						<h1>About Us</h1>

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
										<th>Owner/Customer Name: </th>
										<td>Mr Adrian Venoin</td>
									</tr>

									<tr>
										<th>Customer email: </th>
										<td>Clearbusiness.adrianvenoin@gmail.com</td>
									</tr>

									<tr>
										<th>Trading Since: </th>
										<td>April 2020</td>
									</tr>
								</tbody>
							</table>
						</div>
						{/* <p>
							<span>Restaurant Name: </span>24 Hours Italian Restaurant
						</p> */}
						{/* <p>
							<span>Type of Restaurant: </span>Italian ( Sole Trader)
						</p> */}
						{/* <p>
							<span>Address: </span>Unit 1, Chancerygate Industrial Cent, Horton Close, West Drayton UB7 8EW. United Kingdom
						</p> */}
					</div>
				</div>
				<div className="col-lg-6 d-lg-block d-none resturent_image">
					<img src={Resturent} alt="resturent" />
				</div>
			</div>
		</div>
	)
}

export default AboutResturent
