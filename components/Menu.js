import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import { Text, Avatar, Button, Tabs, useTheme, Popover, Link } from '@geist-ui/react';
import makeStyles from './makeStyles';
import UDomain from './UDomain';


const useStyles = makeStyles((ui) => ({
  header: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    margin: '0 auto',
    backgroundColor: ui.palette.background,
    fontSize: 16,
    height: 60,
    zIndex: 15,
  },
  unstoppable:{
    display: 'flex',
    alignItems: 'center !important',
    justifyContent: 'space-between !important',
    backgroundColor: ui.palette.background,
  },
  headerContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${ui.layout.pageMargin}`,
  },
  headerTitle: {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10
  },
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: ui.palette.background,
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
    zIndex: 15
  },
  navFixed: {
    borderBottom: ui.type === 'light' && 'none',
    boxShadow: ui.type === 'light' && 'rgba(0, 0, 0, 0.1) 0 0 15px 0',
  },
  navContent: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    height: '100%',
    margin: '0 auto',
    '& .tabs header': {
      padding: `0 ${ui.layout.pageMargin}`,
      borderBottom: 'none !important',
      flexWrap: 'nowrap !important',
      overflowY: 'hidden',
      overflowX: 'auto',
      overflow: '-moz-scrollbars-none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '& .content': {
      display: 'none !important'
    },
    '& .tab': {
      padding: '12px !important',
      margin: '0 !important',
      fontSize: '14px !important'
    }
  },
  sidebar: {
    display: 'flex',
    alignItems: 'center !important',
  },
  themeIcon: {
    width: '40px !important',
    height: '40px !important',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    marginRight: 5,
    padding: '0 !important',
  },
  popover: {
    marginRight: 5,
    paddingLeft:'20px !important',
    width: '180px !important'
  }
}));

const popoverContent = () => (
  <>
    <Popover.Item title>
      <span>User Settings</span>
    </Popover.Item>
    <Popover.Item>
      <Link pure>Teams</Link>
    </Popover.Item>
    <Popover.Item>
      <Link pure href='/profile'>GitHub</Link>
    </Popover.Item>
    <Popover.Item line />
    <Popover.Item>
      <Link pure>Logout</Link>
    </Popover.Item>
  </>
);

const Menu = ({ connectUser, provider }) => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [fixed, setFixed] = useState(false);
  const [tab, setTab] = useState(router.pathname);

  useEffect(() => {
    const scrollHandler = () => {
      const shouldFixed = document.documentElement.scrollTop > 60;
      if (fixed !== shouldFixed) setFixed(shouldFixed);
    };
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [fixed]);

  const changeTab = (val) => {

    router.push(val);
    setTab(val);
  }

  return (
    <>
      <div className={classes.header} style={{ marginTop: '10px' }}>
        <div className={classes.headerContent}>
            <div style={{ display: 'flex' }}>
              <Avatar alt="Your Avatar" className={classes.avatar} src="/assets/Opscientia.png" />
              <div className={classes.headerTitle}> <Text h3>ReSci Wallet  &nbsp;</Text></div>
            </div>
         
            <div className={classes.sidebar}>
              <Button
                auto
                type='abort'
                onClick={connectUser}
              >
              {provider ? provider.address : "Connect" }
              </Button>
            <div > <UDomain className={classes.unstoppable} /> </div>
            
              <Popover content={popoverContent} placement="bottomEnd" portalClassName={classes.popover}>
              <div>
              <Avatar src="/assets/ud.png" />
              </div> 

              </Popover>
            </div>
        </div>
      </div>
      <nav className={classes.nav + ' ' + (fixed ? classes.navFixed : '')}>
        <div className={classes.navContent}>
          <Tabs initialValue={tab} onChange={ (val) => {changeTab(val)}}>
            <Tabs.Item label="Upload" value="/" />
            <Tabs.Item label="Public" value="/public" />
          </Tabs>
        </div>
      </nav>
    </>
  );
};

export default Menu;