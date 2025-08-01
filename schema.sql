-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.bookings (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  startDate timestamp without time zone,
  endDate timestamp without time zone,
  numNights smallint,
  numGuests smallint,
  cabinPrice real,
  extrasPrice real,
  totalPrice real,
  status text,
  hasBreakfast boolean,
  isPaid boolean,
  observations text,
  cabinId bigint,
  guestId bigint,
  CONSTRAINT bookings_pkey PRIMARY KEY (id),
  CONSTRAINT bookings_guestId_fkey FOREIGN KEY (guestId) REFERENCES public.guests(id),
  CONSTRAINT bookings_cabinId_fkey FOREIGN KEY (cabinId) REFERENCES public.cabins(id)
);
CREATE TABLE public.cabins (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text,
  maxCapacity smallint,
  regularPrice smallint,
  discount smallint,
  description text,
  image text,
  CONSTRAINT cabins_pkey PRIMARY KEY (id)
);
CREATE TABLE public.guests (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  fullName text,
  email text,
  nationalID text,
  nationality text,
  countryFlag text,
  CONSTRAINT guests_pkey PRIMARY KEY (id)
);
CREATE TABLE public.settings (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  minBookingLength smallint,
  maxBookingLength smallint,
  maxGuestsPerBooking smallint,
  breakfastPrice real,
  CONSTRAINT settings_pkey PRIMARY KEY (id)
);