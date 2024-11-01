import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { CustomInput } from '../atoms/CustomInput';
import { Button } from '../atoms/Button';
import validateEmail from '../../utils/validateEmail';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const iniciarSesion = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Por favor, introduce un email valido');
      return;
    }
    login(email, password);
  };

  return (
    <form onSubmit={iniciarSesion} className="space-y-4">
      <div>
        <CustomInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <CustomInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <Button children="Login" onClick={iniciarSesion} />
      </div>

      <div className="text-center">
        <a href="#" className="text-blue-500 hover:underline">Recuperar Contraseña</a>
      </div>
    </form>
  );
};
