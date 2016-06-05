describe('测试 Dom', function(){
  it('原型继承', function(){
    expect(bb.prototype.aa).toBe('aa');
  })

  it('_instance', function(){
    expect(_instance().aa).toBe('aa');
    console.log(_instance())
  })
})