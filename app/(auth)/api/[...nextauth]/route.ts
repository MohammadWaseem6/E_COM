import bcrypt from "bcrypt";
import NextAuth,{AuthOptions} from "next-auth";
import Credentials, { CredentialsProvider } from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prsima from "@/lib/prismadb";


