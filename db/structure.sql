SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: transaction_categories; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.transaction_categories AS ENUM (
    'undefined',
    'points',
    'clicks',
    'cash'
);


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: artists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.artists (
    id bigint NOT NULL,
    name character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: artists_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.artists_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: artists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.artists_id_seq OWNED BY public.artists.id;


--
-- Name: clicks_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clicks_items (
    id bigint NOT NULL,
    name character varying,
    "desc" character varying,
    price bigint,
    value bigint,
    image character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: clicks_items_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.clicks_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clicks_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.clicks_items_id_seq OWNED BY public.clicks_items.id;


--
-- Name: collectibles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.collectibles (
    id bigint NOT NULL,
    user_id bigint,
    ctype_id bigint,
    clicks bigint,
    level bigint,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    "clicksToLevel" bigint
);


--
-- Name: collectibles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.collectibles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: collectibles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.collectibles_id_seq OWNED BY public.collectibles.id;


--
-- Name: ctypes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ctypes (
    id bigint NOT NULL,
    name character varying,
    "desc" character varying,
    image character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    tier bigint,
    artist_id bigint
);


--
-- Name: ctypes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ctypes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ctypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ctypes_id_seq OWNED BY public.ctypes.id;


--
-- Name: points_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.points_items (
    id bigint NOT NULL,
    name character varying,
    "desc" character varying,
    price double precision,
    value bigint,
    image character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: points_items_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.points_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: points_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.points_items_id_seq OWNED BY public.points_items.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


--
-- Name: transactions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.transactions (
    id bigint NOT NULL,
    user_id bigint,
    amount bigint,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    category public.transaction_categories
);


--
-- Name: transactions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.transactions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: transactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.transactions_id_seq OWNED BY public.transactions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    provider character varying DEFAULT 'email'::character varying NOT NULL,
    uid character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp without time zone,
    allow_password_change boolean DEFAULT false,
    remember_created_at timestamp without time zone,
    sign_in_count integer DEFAULT 0 NOT NULL,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip character varying,
    last_sign_in_ip character varying,
    confirmation_token character varying,
    confirmed_at timestamp without time zone,
    confirmation_sent_at timestamp without time zone,
    unconfirmed_email character varying,
    name character varying,
    nickname character varying,
    image character varying,
    email character varying,
    tokens json,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    mooseclicks bigint,
    lastclick timestamp without time zone,
    "remainingClicks" bigint,
    points bigint,
    "activeMoose" bigint,
    "activeCollectible" bigint
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: artists id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artists ALTER COLUMN id SET DEFAULT nextval('public.artists_id_seq'::regclass);


--
-- Name: clicks_items id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clicks_items ALTER COLUMN id SET DEFAULT nextval('public.clicks_items_id_seq'::regclass);


--
-- Name: collectibles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.collectibles ALTER COLUMN id SET DEFAULT nextval('public.collectibles_id_seq'::regclass);


--
-- Name: ctypes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ctypes ALTER COLUMN id SET DEFAULT nextval('public.ctypes_id_seq'::regclass);


--
-- Name: points_items id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.points_items ALTER COLUMN id SET DEFAULT nextval('public.points_items_id_seq'::regclass);


--
-- Name: transactions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.transactions ALTER COLUMN id SET DEFAULT nextval('public.transactions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: artists artists_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_pkey PRIMARY KEY (id);


--
-- Name: clicks_items clicks_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clicks_items
    ADD CONSTRAINT clicks_items_pkey PRIMARY KEY (id);


--
-- Name: collectibles collectibles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.collectibles
    ADD CONSTRAINT collectibles_pkey PRIMARY KEY (id);


--
-- Name: ctypes ctypes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ctypes
    ADD CONSTRAINT ctypes_pkey PRIMARY KEY (id);


--
-- Name: points_items points_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.points_items
    ADD CONSTRAINT points_items_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: index_collectibles_on_ctype_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_collectibles_on_ctype_id ON public.collectibles USING btree (ctype_id);


--
-- Name: index_collectibles_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_collectibles_on_user_id ON public.collectibles USING btree (user_id);


--
-- Name: index_ctypes_on_artist_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_ctypes_on_artist_id ON public.ctypes USING btree (artist_id);


--
-- Name: index_transactions_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_transactions_on_user_id ON public.transactions USING btree (user_id);


--
-- Name: index_users_on_confirmation_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_confirmation_token ON public.users USING btree (confirmation_token);


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_email ON public.users USING btree (email);


--
-- Name: index_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_reset_password_token ON public.users USING btree (reset_password_token);


--
-- Name: index_users_on_uid_and_provider; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_uid_and_provider ON public.users USING btree (uid, provider);


--
-- Name: ctypes fk_rails_3c20065602; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ctypes
    ADD CONSTRAINT fk_rails_3c20065602 FOREIGN KEY (artist_id) REFERENCES public.artists(id);


--
-- Name: transactions fk_rails_77364e6416; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT fk_rails_77364e6416 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: collectibles fk_rails_c1c7a5e88a; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.collectibles
    ADD CONSTRAINT fk_rails_c1c7a5e88a FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: collectibles fk_rails_eef97d87ab; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.collectibles
    ADD CONSTRAINT fk_rails_eef97d87ab FOREIGN KEY (ctype_id) REFERENCES public.ctypes(id);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO "schema_migrations" (version) VALUES
('20191111183009'),
('20191112180450'),
('20191112180727'),
('20191114000136'),
('20191119175107'),
('20191119205533'),
('20191121160525'),
('20191122203004'),
('20191122203328'),
('20191122203838'),
('20191122203942'),
('20191125163842'),
('20191208173231'),
('20191209220206'),
('20191212212756'),
('20191212213925'),
('20191212214444'),
('20191212220041'),
('20191212220042'),
('20191212221920'),
('20191216165045'),
('20191216165046'),
('20191216165709'),
('20191216170130'),
('20191220181307'),
('20191220204009'),
('20200211181539'),
('20200211181917'),
('20200211182120'),
('20200211202801'),
('20200218210928'),
('20200219022608'),
('20200219022632'),
('20200306233827'),
('20200308163954'),
('20200308184012'),
('20200308184257'),
('20200308184429'),
('20200308184556'),
('20200411170521'),
('20200411170715'),
('20200411171254'),
('20200411171329'),
('20200411171422'),
('20200411171936'),
('20200411172509'),
('20200413033817'),
('20200413033818'),
('20200413033819'),
('20200421215243'),
('20200421221324'),
('20200421221551'),
('20200421222112'),
('20200421232227');


