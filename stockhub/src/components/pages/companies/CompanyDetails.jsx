import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import { Button } from '../../ui/Button';
import SingleStockWidget from '../../ui/SingleStockWidget';
import './CompanyDetails.css';

const CompanyDetails = (props) => {
	const [company, setCompany] = useState([]);
	const [imgUrl, setImgUrl] = useState('');
	const { symbol } = props;

	const access_token = 'bu21mlf48v6u9tetnbt0';

	useEffect(() => {
		axios
			.get(
				`https://finnhub.io/api/v1//stock/profile2?symbol=${symbol}&token=${access_token}`
			)
			.then((res) => {
				setCompany(res.data);
				if (res.data.logo) {
					setImgUrl(res.data.logo);
				} else {
					setImgUrl(
						'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'
					);
				}
				console.log(res.data);
			});
	}, [symbol]);

	let content = (
		<div className='companyCard'>
			<img className='companyLogo' alt='LOGO' src={imgUrl}></img>
			<SingleStockWidget symbol={symbol}></SingleStockWidget>

			<br />
			<p>Since {company.ipo}</p>
			<p>Country: {company.country}</p>
			<p>Field: {company.finnhubIndustry}</p>
			<div className='detailsButton'>
				<Link to={`/details/${symbol}`}>
					<Button
						onClick={props.changeCompanyName.bind(this, company.name)}
						buttonSize='btn--wide'
						buttonColor='blue'
					>
						Details
					</Button>
				</Link>
			</div>
			<br />
		</div>
	);

	return content;
};

export default CompanyDetails;
