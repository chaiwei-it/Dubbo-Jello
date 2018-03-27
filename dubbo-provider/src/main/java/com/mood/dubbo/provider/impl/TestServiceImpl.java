package com.mood.dubbo.provider.impl;

import com.mood.dubbo.remote.TestService;

/**
 * 内容
 *
 * @author chaiwei
 * @time 2018/1/9.
 */
public class TestServiceImpl implements TestService {

    @Override
    public String sayHello(String name) {
        return "Hello " + name + "!";
    }

}
