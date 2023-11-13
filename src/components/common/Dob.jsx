import React from 'react'
import PropTypes from 'prop-types';

export default function Dob({onChangeMonth, onChangeDay, onChangeYear}) {

Dob.propTypes = {
  onChangeDay:PropTypes.func.isRequired,
  onChangeMonth:PropTypes.func.isRequired,
  onChangeYear:PropTypes.func.isRequired,
}

  return (
    <>
       <fieldset className="h-auto flex flex-grow  items-center justify-between self-stretch py-4 px-3 box-border rounded border border-solid border-neutral/500 focus-within:border-twitter-blue-default gap-y-2.5 group/input">
              <legend className="font-medium font-Inter box-border py-0 px-1 inline-flex text-xs not-italic text-neutral/500 leading-1.2 group-focus-within/input:text-twitter-blue-default">
                Month
              </legend>
              <select className="w-full flex bg-neutral/1000 font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic placeholder-neutral/500 group-focus-within/input:outline-none" onChange={(e)=>{onChangeMonth(e)}}>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">september</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </fieldset>
            <fieldset className="h-auto flex items-center justify-between self-stretch py-4 px-3 box-border rounded border border-solid border-neutral/500 focus-within:border-twitter-blue-default gap-y-2.5 group/input">
              <legend className="font-medium font-Inter box-border py-0 px-1 inline-flex text-xs not-italic text-neutral/500 leading-1.2 group-focus-within/input:text-twitter-blue-default">
                Day
              </legend>
              <select className="w-full flex bg-neutral/1000 font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic placeholder-neutral/500 group-focus-within/input:outline-none" onChange={(e)=>{onChangeDay(e)}} >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
                <option value={24}>24</option>
                <option value={25}>25</option>
                <option value={26}>26</option>
                <option value={27}>27</option>
                <option value={28}>28</option>
                <option value={29}>29</option>
                <option value={30}>30</option>
                <option value={31}>31</option>
              </select>
            </fieldset>
            <fieldset className="h-auto flex items-center justify-between self-stretch py-4 px-3 box-border rounded border border-solid border-neutral/500 focus-within:border-twitter-blue-default gap-y-2.5 group/input">
              <legend className="font-medium font-Inter box-border py-0 px-1 inline-flex text-xs not-italic text-neutral/500 leading-1.2 group-focus-within/input:text-twitter-blue-default">
                Year
              </legend>
              <select className="w-full flex bg-neutral/1000 font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic placeholder-neutral/500 group-focus-within/input:outline-none peer" onChange={(e)=>{onChangeYear(e)}}>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
              </select>
            </fieldset>
    </>
  )
}
