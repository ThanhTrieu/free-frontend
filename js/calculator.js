$(function(){
	// comment tren 1 dong
	/* 
	coment tren nhieu dong
	*/
	// day goi la phuong thuc khoi tao cua jquery
	// y nghia : cho doi ma html va css duoc trinh duyet xu ly xong roi moi den xu ly cac ma lenh javascript
	// tat ca ma lenh(code) javascript-Jquery deu nam trong phuong thuc(ham) nay
	// alert('Hello you ...');
	// bat su kien nguoi dung bam cac nut tren may tinh de hinh thanh bieu thuc toan hoc
	// .calculate : truy cap vao gia tri class cua no
	// lam the nao biet dc nguoi dung vua bam cai gi
	// an dau bang di
	$('.equals').hide();
	// dinh nghia bien toan cuc(su dung bat ky noi dau)
	let calculators = null;
	let operators = null;
	$('.calculate').click(function(){
		// neu dinh nghia bien trong nay : bien cuc bo (chi su dung noi bo trong no thoi)
		// viet cac logic xu ly o day
		operators = $(this).text().trim();
		//alert(operators);
		// hien thi bieu thuc toan hoc vao o text
		$('.calculation').val($('.calculation').val()+operators);
	});

	$('.compares').click(function(){
		// bat su kien nguoi dung bam dau bang
		calculators = $('.calculation').val();
		// su dung thu vien math de tinh toan
		// math.eval : tinh toan bieu thuc toan hoc
		let result = math.eval(calculators);
		if(result){
			// hien thi dau bang
			$('.equals').show();
			// hien thi ket qua
			// add gia tri vao the html
			$('#result').text(result);
		}
	});

	// su kien xoa  bieu thuc toan hoc sai
	$('.remove-calculator').click(function(){
		$('.calculation').val(function(index, value){
			// substr la ham cat chuoi tu vi tri nao cho den vi tri nao
			return value.substr(0, value.length -1);
		});
	});

	// clear calculators
	$('.clear-calculator').click(function(){
		// xoa trang bieu thuc toan hoc trong o text
		$('.calculation').val('');
		// xoa het cac ket qua
		$('#result').empty();
		// an dau bang
		$('.equals').hide();
	});

	// xu ly on/off calculator
	$('.start-calculator').click(function(){
		// toggleClass : khi khong co class thi se them vao va nguoc lai
		$(this).toggleClass('on-calculator');
		if(!$(this).hasClass('on-calculator')){
			// mo may tinh
			$('.clear-calculator').attr('disabled', false);
			$('.calculate').attr('disabled', false);
			$('.remove-calculator').attr('disabled', false);
			$('.compares').attr('disabled', false);
		} else {
			// tat mat tinh
			$('.clear-calculator').attr('disabled', true);
			$('.calculate').attr('disabled', true);
			$('.remove-calculator').attr('disabled', true);
			$('.compares').attr('disabled', true);
		}
	});

	// mac dinh may se tat
	$('.clear-calculator').attr('disabled', true);
	$('.calculate').attr('disabled', true);
	$('.remove-calculator').attr('disabled', true);
	$('.compares').attr('disabled', true);

});