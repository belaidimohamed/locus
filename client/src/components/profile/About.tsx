import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { countries } from 'countries-list';

export function About({userInfo, submitHandle}: any): React.ReactElement {

  const [firstName, setFirstName] = useState<string>(userInfo.firstName);
  const [lastName, setLastName] = useState<string>(userInfo.lastName);
  const [gender, setGender] = useState<string>(userInfo.gender);
  const [age, setAge] = useState<number | null>(+userInfo.age ? +userInfo.age : null);
  const [bio, setBio] = useState<string | null>(userInfo.bio ? userInfo.bio : null);
  const [location, setLocation] = useState<string | null>(userInfo.location ? userInfo.location : null);

  const ctrs = [];
  const countries2: any = countries; 
  for (let country in countries2) {
    ctrs.push({name: countries2[country].name, flag: countries2[country].emoji});
  };

  const handleEdit = () => {
    const popup = document.querySelector('.edit-popup') as HTMLDivElement;
    popup.style.display = 'block';
  };

  const handleClose = (cb?: Function) => {
    const popup = document.querySelector('.edit-popup') as HTMLDivElement;
    popup.style.display = 'none';
    cb && cb()
  };

  return (
    <div>
      <h2>About me: <span className='edit' onClick={handleEdit}><AiFillEdit /></span></h2>
      <h3>first name: {userInfo.firstName}</h3>
      <h3>last name: {userInfo.lastName}</h3>
      <h3>gender: {userInfo.gender}</h3>
      <h3>age: {userInfo.age ? userInfo.age: '?' }</h3>
      <h3>sohrt bio: {userInfo.bio ? userInfo.bio: '?' }</h3>
      <h3>location: {userInfo.location ? userInfo.location: '?' }</h3>
      <div className='edit-popup'>
        <h2>Edit:</h2>
        <h2 className='close' onClick={() => handleClose()}>X</h2>
        <input type='text' name='firstname' 
                           value={firstName} 
                           onChange={e => setFirstName(e.target.value.toLocaleLowerCase())} />
        <input type='text' name='lastname'
                           value={lastName} 
                           onChange={e => setLastName(e.target.value.toLocaleLowerCase())} />
        <select name="gender" defaultValue={gender} onChange={e => setGender(e.target.value.toLocaleLowerCase())}>
            <option value="DEFAULT" disabled hidden>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        {
          age 
            ? <input type='number' name='age' value={age} onChange={e => setAge(+e.target.value)} />
            : <input type='number' name='age' placeholder='Enter your age' onChange={e => setAge(+e.target.value)} />
        }
        {bio
            ? <textarea name="bio" value={bio} onChange={e => setBio(e.target.value)}></textarea>
            : <textarea name="bio" placeholder='Add your short bio' onChange={e => setBio(e.target.value)}></textarea>
        }
        {
          !location ?
            <select name="location" defaultValue="DEFAULT" onChange={e => setLocation(e.target.value)}>
              <option value="DEFAULT" disabled hidden>location</option>
              {
                ctrs.map((country: {name: string, flag: string}): JSX.Element => {
                  return <option value={country.flag + ' ' + country.name} key={country.name}>
                    {country.flag + ' ' + country.name}
                  </option>
                })
              }
            </select> :
            <select name="location" defaultValue={location} onChange={e => setLocation(e.target.value)}>
             <option value="DEFAULT" disabled hidden>{location}</option>
              {
                ctrs.map((country: {name: string, flag: string}): JSX.Element => {
                  return <option value={country.flag + ' ' + country.name} key={country.name}>
                    {country.flag + ' ' + country.name}
                  </option>
                })
              }
            </select> 
        }
        <button className="btn update" onClick={() => handleClose(() => submitHandle({firstName, lastName, gender, age, bio, location}))}>Update</button>
      </div>
    </div>
  );
};
