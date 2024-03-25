import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const PrivacyPolicyPage = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Charte de Confidentialité
      </Typography>
      
      <Typography variant="body1" paragraph>
        [Nom de l'entreprise] s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données personnelles dans le respect des lois et réglementations en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Collecte des données personnelles
      </Typography>
      
      <Typography variant="body1" paragraph>
        Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par [Nom de l'entreprise] pour [préciser les finalités comme la gestion de notre clientèle, l'envoi de newsletters, etc.]. Les données collectées incluent [listez les types de données comme nom, email, etc.].
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Utilisation des données
      </Typography>
      
      <Typography variant="body1" paragraph>
        Les données personnelles recueillies sur le site sont utilisées pour permettre l'exploitation du site, améliorer la navigation de l'utilisateur, et à des fins statistiques. Elles sont conservées pour la durée nécessaire à la réalisation des finalités pour lesquelles elles sont collectées et traitées.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Droits des utilisateurs
      </Typography>
      
      <Typography variant="body1" paragraph>
        Conformément au RGPD, vous disposez des droits suivants sur vos données : droit d'accès, de rectification, de suppression, de limitation, d'opposition au traitement de vos données, de retrait de votre consentement à tout moment, et du droit à la portabilité de vos données.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter [adresse email/contact].
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Partage des données personnelles avec des tiers
      </Typography>
      
      <Typography variant="body1" paragraph>
        [Nom de l'entreprise] s'engage à ne pas vendre, louer, céder ou donner accès à vos données à des tiers, sauf en cas de contrainte légale ou si cela est nécessaire à l'exécution de nos services.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Sécurité
      </Typography>
      
      <Typography variant="body1" paragraph>
        [Nom de l'entreprise] met en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au risque et de protéger les données personnelles contre les altérations, pertes, et accès non autorisés.
      </Typography>
      
      <Box textAlign="center" mt={4}>
        <Link href="/" variant="body2">
          Retour à l'accueil
        </Link>
      </Box>
    </Container>
  );
};

export default PrivacyPolicyPage;
