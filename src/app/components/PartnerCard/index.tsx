import Image from "next/image";
import type { PartnerProfile } from "../../site-config";

type Props = {
  profile: PartnerProfile;
  eager?: boolean;
};

export default function PartnerCard({ profile, eager = false }: Props) {
  return (
    <article className="partner-card relative isolate mx-auto flex min-h-[25rem] w-full max-w-[21.25rem] flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-light px-4 py-8 text-center text-primary shadow-xl">
      <span
        className="partner-card__corner partner-card__corner--top mt-[-0.61rem] scale-200"
        aria-hidden="true"
      />
      <span
        className="partner-card__corner partner-card__corner--bottom  mr-[-5rem] scale-200"
        aria-hidden="true"
      />

      <div className="relative z-10 aspect-square w-[70%] max-w-56 overflow-hidden rounded-md">
        <Image
          src={profile.image}
          alt={profile.imageAlt}
          fill
          className="object-cover"
          sizes="224px"
          loading={eager ? "eager" : "lazy"}
        />
      </div>

      <div className="relative z-10 mt-4 w-full">
        <h3 className="font-lato text-sm font-bold uppercase text-primary">
          {profile.name}
        </h3>
        <p className="mt-2 font-lato text-xl font-bold leading-tight text-primary-dark sm:text-2xl">
          {profile.specialty}
        </p>
        {profile.oab ? (
          <p className="mt-3 font-lato text-sm text-gray">{profile.oab}</p>
        ) : null}
        {profile.bio ? (
          <p className="mt-4 font-lato text-sm leading-relaxed text-gray">
            {profile.bio}
          </p>
        ) : null}
      </div>
    </article>
  );
}
