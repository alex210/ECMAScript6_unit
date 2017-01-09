var app = require('../script.js');

describe("pow", function() {
  it("it should call pow function", function() {
    // prepare
    var result1, result2, result3, result4, result5, result6, result7, result8;

    // act
    result1 = app.pow(5, 2);
    result2 = app.pow(5, 0);
    result3 = app.pow(0, 5);
    result4 = app.pow(0, 0);
    result5 = app.pow(0, -5);
    result6 = app.pow(5, -2);
    result7 = app.pow(-5, 2);
    result8 = app.pow(-5, 3);

    // assert
    expect(result1).toEqual(25);
    expect(result2).toEqual(1);
    expect(result3).toEqual(0);
    expect(result4).toEqual(1);
    expect(result5).toEqual('ERROR');
    expect(result6).toEqual(0.04);
    expect(result7).toEqual(25);
    expect(result8).toEqual(-125);
  });
});
