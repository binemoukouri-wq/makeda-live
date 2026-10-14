CREATE TABLE `events` (
	`id` text PRIMARY KEY NOT NULL,
	`session` text NOT NULL,
	`event` text NOT NULL,
	`source` text NOT NULL,
	`product` text,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` text PRIMARY KEY NOT NULL,
	`token` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`amount` real NOT NULL,
	`frequency` text NOT NULL,
	`projection` real NOT NULL,
	`product` text NOT NULL,
	`source` text NOT NULL,
	`consent` integer NOT NULL,
	`marketing` integer NOT NULL,
	`created` text NOT NULL,
	`status` text DEFAULT 'New' NOT NULL,
	`appointment` text,
	`appointment_status` text DEFAULT 'None' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
