describe('测试 Dom', function(){
  it('原型继承', function(){
    expect($$).toBeTruthy();
  })

  it('选择body', function(){
    expect($$('body')).toBeTruthy();
    expect($$('body').length > 0).toBeTruthy();
  })

  it('_instance2', function(){
    expect(_instance().aa).toBe('aa');
  })
})