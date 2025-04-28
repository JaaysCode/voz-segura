'use client';

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { useState, useCallback} from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';



