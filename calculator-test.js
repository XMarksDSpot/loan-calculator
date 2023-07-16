it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 40000, rate: 5, years: 5})).toEqual('754.85');
  expect(calculateMonthlyPayment({amount: 60000, rate: 8, years: 8})).toEqual('848.20');
});


it("should return a result with 2 decimal places", function() {
  const payment = calculateMonthlyPayment({amount: 40000, rate: 5, years: 5});

  expect(payment.split('.')[1].length).toEqual(2);
});