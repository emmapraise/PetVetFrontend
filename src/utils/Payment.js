import React from 'react';

function Payment() {
	function randomReference() {
		var length = 10;
		var chars =
			'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var result = '';
		for (var i = length; i > 0; --i)
			result += chars[Math.floor(Math.random() * chars.length)];
		return result;
	}
	const refCode = randomReference();
	var merchantCode = 'MX97554';
	var payItemId = 'Default_MX97554';
	// var redirectUri = `${process.env.REACT_APP_BACKEND_URL}payment/verify/ref/${refCode}`;
	var redirectUri = 'http://localhost:8282/api/payment/ref/' + refCode;

	const params = [
		{
			name: 'amount',
			value: 50000,
		},
		{
			name: 'txn_ref',
			value: refCode,
		},
		{
			name: 'merchantCode',
			value: merchantCode,
		},
		{
			name: 'payItemId',
			value: payItemId,
		},
		{
			name: 'redirectUri',
			value: redirectUri,
		},
		{
			name: 'cust_id',
			value: 'emmapraise@emma.com',
		},
		{
			name: 'currency',
			value: 566,
		},
	];

	function setupForm() {
		var x = document.createElement('form');
		x.setAttribute('id', 'myForm');
		x.setAttribute('action', 'https://webpay-ui.k8.isw.la/collections/w/pay');
		x.setAttribute('method', 'POST');
		document.body.appendChild(x);

		params.map((elemnt) => {
			var y = document.createElement('input');
			// y.setAttribute('type', 'text');
			y.setAttribute('value', elemnt.value);
			y.setAttribute('name', elemnt.name);
			document.getElementById('myForm').appendChild(y);
		});

		var z = document.createElement('input');
		z.setAttribute('type', 'submit');
		z.setAttribute('value', 'Pay Now');
		document.getElementById('myForm').appendChild(z);

		console.log(document.getElementById('myForm'));
		// document.forms["myForm"].submit()
	}

	return (
		<>
			<body onLoad={setupForm()}>
				{/* <form
				method="POST"
				action="https://webpay-ui.k8.isw.la/collections/w/pay"                 
                id='just'
			>
				<input type="hidden" name="amount" value="30000" />
				<input type="hidden" name="currency" value="566" />
				<input type="hidden" name="txn_ref" id="tranRef" />
				<input type="hidden" name="merchant_code" />
				<input type="hidden" name="pay_item_id" />
				<input type="hidden" name="site_redirect_url" />
				<input type="hidden" name="display_mode" value="PAGE" />

			</form> */}
			</body>
		</>
	);
}

export default Payment;
