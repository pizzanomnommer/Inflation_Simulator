$.getJSON('https://api.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/debt_to_penny?sort=-data_date&page%5Bnumber%5D=1&page%5Bsize%5D=1', function(data) {
    console.log(data);

    var CalYear = "https://api.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/debt_to_penny?sort=-data_date&page%5Bnumber%5D=1&page%5Bsize%5D=1" + data.reporting_calendar_year;
    console.log(CalYear);
});