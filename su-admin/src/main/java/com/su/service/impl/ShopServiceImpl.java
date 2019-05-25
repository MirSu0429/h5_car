package com.su.service.impl;

import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.su.dao.ShopMapper;
import com.su.entity.ShopEntity;
import com.su.service.IShopService;
import org.springframework.stereotype.Service;

/**
 * @Author: supengfei
 * @Date: 2019/5/20 22:34
 * @Description:
 */
@Service
public class ShopServiceImpl extends ServiceImpl<ShopMapper, ShopEntity> implements IShopService {
}
