<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu :active-name="asideMenuConfig[0].name" theme="dark" width="auto" :class="menuitemClasses" >
                    <router-link  v-for="(item, index) in asideMenuConfig" :key="index" :to="item.path">
                        <MenuItem :name="item.name">
                            <Icon :type="item.icon"></Icon>
                            <span>{{ item.name }}</span>
                        </MenuItem>
                    </router-link>
                    
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                    <div class="header-bar-tools">
                        <Dropdown transfer trigger="click" placement="bottom-end">
                            <a href="javascript:void(0)">
                                <span :title="userName">{{ userName }}</span>
                                <Icon type="arrow-dzown-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                            <DropdownItem name="loginout">退出登录</DropdownItem>
                            </DropdownMenu>
                            <Avatar size="large" :src="avatorPath" style="margin-left: 10px;"></Avatar>
                        </Dropdown>
                    </div>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import { asideMenuConfig } from '@/menuConfig.js'
    console.log(asideMenuConfig);
    export default {
        data () {
            return {
                asideMenuConfig: asideMenuConfig,
                isCollapsed: false,
                userName: "zhaosi",
                avatorPath: "https://i.loli.net/2017/08/21/599a521472424.jpg"
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>

<style lang="less" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        .header-bar-tools{
            float: right;
            padding-right: 20px;
            a{
                font-size: 14px;
                color: #1c2345;
            }
        }
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
