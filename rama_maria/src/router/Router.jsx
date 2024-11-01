import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage'
import { LoginPage } from '../components/pages/LoginPage'
import { SidebarProvider } from '../context/SidebarContext'
import ProtectedRoute from '../components/configs/ProtectedRoute';
import { UserPage } from '../components/pages/UserPage'
import { FincaPage } from '../components/pages/FincaPage'
import { VariedadPage } from '../components/pages/VariedadPage'
import { LotePage } from '../components/pages/LotePage'
import { MuestraPage } from '../components/pages/MuestraPage'
import { AnalisisPage } from '../components/pages/AnalisisPage'
import { ResultadoPage } from '../components/pages/ResultadoPage'
import { SensorialPage } from '../components/pages/SensorialPage'
import { ReportePage } from '../components/pages/ReportePage'

export const AppRouter = () => {
    return (

      
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                } />

                <Route path="/user" element={
                    <ProtectedRoute>
                        <UserPage />
                    </ProtectedRoute>
                } />

                <Route path="/finca" element={
                    <ProtectedRoute>
                        <FincaPage />
                    </ProtectedRoute>
                } />


                <Route path="/variedades" element={
                    <ProtectedRoute>
                        <VariedadPage />
                    </ProtectedRoute>
                } />


                <Route path="/lotes" element={
                    <ProtectedRoute>
                        <LotePage />
                    </ProtectedRoute>
                } />


                <Route path="/muestras" element={
                    <ProtectedRoute>
                        <MuestraPage />
                    </ProtectedRoute>
                } />

                <Route path="/analisis" element={
                    <ProtectedRoute>
                        <AnalisisPage />
                    </ProtectedRoute>
                } />

                <Route path="/variables" element={
                    <ProtectedRoute>
                        <VariedadPage />
                    </ProtectedRoute>
                } />

                <Route path="/resultados" element={
                    <ProtectedRoute>
                        <ResultadoPage />
                    </ProtectedRoute>
                } />

                <Route path="/sensorial" element={
                    <ProtectedRoute>
                        <SensorialPage />
                    </ProtectedRoute>
                } />

                <Route path="/reportes" element={
                    <ProtectedRoute>
                        <ReportePage />
                    </ProtectedRoute>
                } />

            </Routes>
    

    )
}
