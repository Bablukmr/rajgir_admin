import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import IntegratedSafari from './pages/IntegratedSafari';
import Package from './pages/Package';
import Activity from './pages/Activity';
import Timeslots from './pages/Timeslots';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title=" Dashboard | Rajgir Zoo & Nature " />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Rajgir Zoo & Nature " />
              <Calendar />
            </>
          }
        />
        <Route
          path="/integrated-safari"
          element={
            <>
              <PageTitle title="Zoo & Safari Booking Form" />
              <IntegratedSafari />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Rajgir Zoo & Nature " />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Rajgir Zoo & Nature " />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Rajgir Zoo & Nature " />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | Rajgir Zoo & Nature " />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Rajgir Zoo & Nature " />
              <Settings />
            </>
          }
        />
        <Route
          path="/forms/activity"
          element={
            <>
              <PageTitle title="Settings | Rajgir Zoo & Nature " />
              <Activity />
            </>
          }
        />
        <Route
          path="/forms/timeslot"
          element={
            <>
              <PageTitle title="Settings | Rajgir Zoo & Nature " />
              <Timeslots />
            </>
          }
        />
        <Route
          path="/forms/package"
          element={
            <>
              <PageTitle title="Settings | Rajgir Zoo & Nature " />
              <Package />
            </>
          }
        />
        <Route
          path="/forms/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Rajgir Zoo & Nature " />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Rajgir Zoo & Nature " />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Rajgir Zoo & Nature " />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Rajgir Zoo & Nature " />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Rajgir Zoo & Nature " />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
