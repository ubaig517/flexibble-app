"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "./Button";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log("logging res", res);

      setProviders(res);
    };

    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, idx) => (
          <Button
            key={idx}
            handleClick={() => signIn(provider?.id)}
            title="Sign In"
          />
        ))}
      </div>
    );
  }
};

export default AuthProviders;
