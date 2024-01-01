import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { statisticsSelector } from "../redux/store";
import { getStatisticsPending } from "../redux/statistics/statisticSlice";
export const Home = () => {
  const { statistics } = useAppSelector(statisticsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (statistics.length === 0) {
      dispatch(getStatisticsPending());
    }
  }, [dispatch, statistics.length]);

  return (
    <>
      <Hero />
    </>
  );
};
